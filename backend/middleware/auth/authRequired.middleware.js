const jwt = require('jsonwebtoken')
const { JWT_KEY } = require('../../config/keys')


const AuthRequired = (req, res, next) => {
    try {
        const authorization = req.headers.authorization;
        if (!authorization) return res.status(401).json({ msg: "Invalid Token" })
            //  const token = authorization.split(' ')[1]
        const token = authorization
        const user = jwt.verify(token, JWT_KEY)

        req.user = user
        next()
    } catch (err) {
        res.status(403).json({ msg: "Invalid Token", err: err })
    }
}

module.exports = { AuthRequired }