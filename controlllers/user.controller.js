const User = require("../models/User.model")

module.exports.userController = {
    addUser: async (req, res) => {
        try{
            const  {firstName,lastName,mail,phone,pets} = req.body
            const newUser = await User.create({
                firstName: firstName,
                lastName: lastName,
                mail: mail,
                phone: phone,
                pets: pets
            })

            res.json(newUser)
        } catch (e) {
            res.json(e)
        }
    },
    removeUser: async (req, res) => {
        try {
            const {id} = req.body
            await User.findByIdAndRemove(id)

            res.json("удалено")
        } catch (e) {
            res.json(e)
        }
    },
    getUsers: async (req,res) => {
        try{
            const users = User.find()
            res.json(users)
        } catch (e) {
            res.json()
        }
    }




}

