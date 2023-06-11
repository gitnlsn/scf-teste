const { authorize } = require("./authorize")

const authorize = (req, res, next) => {
    const authHeader = req.headers.authorization
    
    if (authHeader === undefined) {
        return res.status(401).json({ error: "Unauthorized." })
    }
    
    const [ type, token ] = authHeader.split(" ")
    
    if (type !== "Bearer") {
        return res.status(401).json({ error: "Unauthorized." })
    }
    
    if (!authorize(token)) {
        return res.status(401).json({ error: "Unauthorized." })
    }
    
    return next()
}

module.exports = {
    authorize
}