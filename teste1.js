let { data, log } = require("./fakeData");
const { incrementGetRequestLog } = require("./fakeData")

const getUser = ( req, res, next ) => {
    const { name } =  req.query;

    const existingUser = data.find(user => user.name === name)
    
    if (existingUser !== undefined) {
        return res.status(200).json(existingUser)
    }

    incrementGetRequestLog(existingUser.id)
    return res.status(404).json({ error: "User does not exist." })
};

const getUsers = ( req, res, next ) => {
    incrementGetRequestLog()
    return res.status(200).json(data);
};

module.exports = {
    getUser,
    getUsers
};
