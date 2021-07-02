const router = require('express').Router()
const { body, validationResult } = require('express-validator')


const { User } = require('../../models/user.model')
const { AuthRequired } = require('../../middleware/auth/authRequired.middleware')

//get all user transactions
router.get('/', AuthRequired, async(req, res) => {
    const user = await User.findById(req.user.id)

    res.json({ transactions: user.transactions })

})

//get all account transactions
router.get('/:id', AuthRequired, async(req, res) => {
    const { id } = req.params

    const user = await User.findById(req.user.id)
    const transaction = await user.transactions.filter(tr => tr.from.id == id || tr.to.id == id)
    if (!transaction) res.status(401).json({ msg: "Transactions Not Found" })

    res.json({ transaction })

})

//create transaction

const createTransactionValidator = [
    body('type').exists().notEmpty().isIn(['income', 'transfer', 'expense']).withMessage('Type Must Be income transfer or expense'),
    body('fromId').exists().notEmpty().withMessage('fromId must be an id of existing account'),
    body('toId').exists().notEmpty().withMessage('toId must be an id of existing account'),
    body('amount').exists().notEmpty().isFloat({ min: 1 }).withMessage('amount must be a valid Number and more than 1')
]
router.post('/', AuthRequired, createTransactionValidator, async(req, res) => {

    //check validations errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) res.status(401).json({ errors: errors.array() })

    const user = await User.findById(req.user.id)
    const accounts = user.accounts;

    const { type, fromId, toId, amount, note } = req.body
    const amountSign = ['expense', 'transfer'].includes(type) ? -1 : 1


    const from = accounts.find(acc => acc._id == fromId)
    if (!from) res.status(401).json({ msg: "From account Not Found" })

    from.balance += +amount * amountSign

    let to
    if (type !== 'transfer') {
        to = from
    } else {
        to = await accounts.find(account => account._id == toId)
        if (!to) res.status(401).json({ msg: "To account Not Found" })

        to.balance += Number(amount)
    }
    const transaction = {
        type,
        amount,
        from: {
            id: from._id,
            name: from.name
        },
        to: {
            id: to._id,
            name: to.name
        },
        note
    }
    user.transactions.push(transaction)

    await user.save()

    res.status(201).json({ transaction })

})

//delete a transactions
router.delete('/:id', AuthRequired, async(req, res) => {
    const { id } = req.params
    const user = await User.findById(req.user.id)
    const transactionIndex = await user.transactions.findIndex(tr => tr._id == id)
    const transaction = user.transactions[transactionIndex]


    const amountSign = ['expense', 'transfer'].includes(transaction.type) ? 1 : -1
        //find account that the transaction happened between them 
    const from = await user.accounts.find(acc => acc._id == transaction.from.id)
    from.balance += transaction.amount * amountSign


    if (transaction.type == 'transfer') {
        const to = await user.accounts.find(acc => acc._id == transaction.to.id)
        to.balance -= transaction.amount * amountSign
    }

    user.transactions.splice(transactionIndex, 1)

    await user.save()

    res.json({ accounts: user.accounts, transaction })
})

module.exports = router;