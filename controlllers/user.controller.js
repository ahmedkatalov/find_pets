const User = require("../models/User.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


module.exports.userController = {
    addUser: async (req, res) => {
        try{
            const {firstName,lastName,mail,phone,pets, login, password} = req.body
            if(await User.findOne({login})){
                return res.status(401).json({error:"такой login или mail занят"})
            }
            const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_ROUND))

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
            res.status(400).json({error: "Заполните все поля"})
        }
    },
    login: async (req, res) => {
        try{
            const {login, password} = req.body

            const candidate = await User.findOne({login: login})

            if(!candidate){
                res.status(401).json({error: "Неправильный логин"})
            }

            const valid = await bcrypt.compare(password, candidate.password)

            if(!valid){
                res.status(401).json({error: "Неправильный пароль"})
            }

            const payload = {
                firstName: candidate.firstName,
                lastName: candidate.lastName,
                phone: candidate.phone,
                mail: candidate.map,
                id: candidate._id,
                pets: candidate.pets,
                login: candidate.login
            }

            const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
                expiresIn: "24h"
            })

            res.json(token)
        }catch (e) {
            res.json({error:"Ошибка при авторизации"})
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
            const users = await User.find()
            res.json(users)
        } catch (e) {
            res.json()
        }
    },
    getUserById: async (req, res)=>{
        const {authorization} = req.headers
        try {

            const [type, token] = authorization.split(" ")

            if (type !=="Bearer"){
                return res.status(401).json("Неверный тип токена" + token)
            }

            const payload = await jwt.verify(token, process.env.SECRET_JWT_KEY)

            const user = await User.findById(payload.id)

            res.json(user)
        } catch (e) {
            res.status(401).json({error: "Ошибка получения данных" })
        }
    }

}

