const { data, log } = require("./fakeData");

const getUserGetRequestsQuantity = (req, res) => {
    const { name } =  req.query;
        
    const existingUser = data.find(user => user.name === name)
    
    if (existingUser === undefined) {
        return res.status(404).json({ error: "User does not exist." })
    }
    
    const existingLog = log.find(({id}) => id === existingUser.id)
    const getRequestsReadQuantity = 
          existingLog !== undefined 
            ? existingLog.getRequests 
            : 0

    return res.send("Usuário " +  name  + `  foi lido ${getRequestsReadQuantity} vezes.`);

};

module.exports = {
    getUserGetRequestsQuantity
}
