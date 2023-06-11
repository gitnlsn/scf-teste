const { data, log } =  require("./fakeData");

const createUser = (req, res) => {
    const { name, job } =  req.body;
    
    const newId = Math.max(null, data.map(user =>  user.id)) + 1
    
    const newUser = {
        id: newId,
        name,
        job,
    }

    data.push(newUser)
    log.push({ id: newId, getRequests: 0 })
    return res.send(newUser);
};

module.exports = {
    createUser
}
