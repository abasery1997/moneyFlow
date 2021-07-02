const { AuthRequired } = require('../middleware/auth/authRequired.middleware')
const { User } = require('../models/user.model')
const accountRoutes = require('./swift/accounts.routes')
const transactionsRoutes = require('./swift/transactions.routes')
const router = require('express').Router()

router.use('/accounts', accountRoutes)
router.use('/transactions', transactionsRoutes)

router.get('/', AuthRequired, async(req, res) => {
    const user = await User.findById(req.user.id)
    res.json({
        accounts: user.accounts,
        transactions: user.transactions
    })
})

module.exports = router;