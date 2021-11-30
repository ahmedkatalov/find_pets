const User = require("../models/User.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


module.exports.userController = {
    addUser: async (req, res) => {
        try{

            const  {firstName,lastName,mail,phone,pets, login, password} = req.body

            const hash = await bcrypt.hash(password, process.env.BCRYPT_ROUND)

            const newUser = await User.create({
                login: login,
                password: hash,
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
    login: async (req, res) => {
        try{
            const {login, password} = req.body

            const candidate = await User.findOne({login: login})

            if(!candidate){
                res.status(401).json("Неправильный логин")
            }

            const valid = await bcrypt.compare(password, candidate.password)

            if(!valid){
                res.status(401).json("Неправильный пароль")
            }

            const payload = {
                id: candidate._id,
                login: candidate.login
            }

            const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
                expiresIn: "24h"
            })

            res.json(token)

        }catch (e) {
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

