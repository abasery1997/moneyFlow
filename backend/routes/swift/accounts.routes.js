const router = require('express').Router()
const { body, validationResult } = require('express-validator')

const { AuthRequired } = require('../../middleware/auth/authRequired.middleware')
const { User } = require('../../models/user.model')


//get all accounts of a specific user
router.get('/', AuthRequired, async(req, res) => {
    const user = await User.findById(req.user.id)
    res.json({ accounts: user.accounts })
})

//get specific account of user 
router.get('/:id', AuthRequired, async(req, res) => {
        const { id } = req.params

        const user = await User.findById(req.user.id)
        const account = user.accounts.find(account => account._id == id)

        if (!account) res.status(401).json({ msg: "Account Not Found" })

        res.json({ account })
    })
    //create new account with its balance

const createAcountValidation = [
    body('name').notEmpty().withMessage('Name Must Be valid '),
    body('balance').notEmpty().isFloat({ min: 0, max: 10000 }).withMessage('balance must be in range 0-10000 ')
]
router.post('/', AuthRequired, createAcountValidation, async(req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { name, balance } = req.body;

    //get the user 
    const user = await User.findById(req.user.id)


    // add new account
    user.accounts.push({
        name,
        balance
    })
    await user.save()

    res.status(201).json({
        accounts: user.accounts
    })
})
module.exports = router;