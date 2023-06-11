var { data } =  require("./fakeData");

const deleteUser = (req, res) => {
    const { name } =  req.query;

    const filteredUserList = data.filter(user => user.name !== name)
    const didNotDeleteUser = filteredUserList.length === data.length

    if (didNotDeleteUser) {
        return res.status(404).json({ error: "User does not exist" })
    }

    data = filteredUserList
    return res.status(200).json({ status: "success" });
};

module.exports = {
    deleteUser
}
