var { data } =  require("./fakeData");

const updateUser = (req, res) => {
    const { id } =  req.query;
    const { name, job } =  req.body;

    const userToUpdate = data.find(user => user.id === id);
    
    if (userToUpdate === undefined) {
        return res.status(404).json({ error: "User does not exist" })
    }
    
    const updatedUser = {
        ...userToUpdate,
        name,
        job
    }
    
    data = data.map(user => {
        if (user.id === id) {
            return updatedUser
        }
        
        return user
    })

    return res.status(200).json({ message: "success", user: updatedUser });
};

module.exports = {
    updateUser
}
