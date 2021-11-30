const Pet = require('../models/Pet.model')
const jwt = require("jsonwebtoken")


module.exports.petController = {
  addPet: async (req, res) => {
    try {
    const {img, header, description, category} = req.body
    const {authorization} = req.headers

    const [type, token] = authorization.split(" ")

    if (type !=="Bearer"){
      return res.status(401).json("Неверный тип токена" + token)
    }
      const payload = await jwt.verify(token, process.env.SECRET_JWT_KEY)

      const pet = await Pet.create({
        img: img,
        header: header,
        description: description,
        user: payload.id,
        category: category
      })
      res.json(pet)
    }catch (e) {
      res.status(401).json("123  " + e)
    }
  },
  getPets: async (req, res) => {
    try {
      const pet = await Pet.find()
      res.json(pet)
    }catch (e) {
      res.json(e)
    }
  },
  editPet: async (req, res) => {

    const {img, header, description, user, category} = req.body

    try {
      const pet = await Pet.findByIdAndUpdate(req.params.id,{
        img: img,
        header: header,
        description: description,
        user: user,
        category: category
      })
      res.json(pet)
    }catch (e) {
      res.json(e)
    }
  },
  removePet: async (req, res) => {
    try{
      await Pet.findByIdAndRemove(req.params.id)
      res.json("Успешно удален")
    }catch (e) {
      res.json(e)
    }
  },
  getPetById: async (req, res) => {
    try{
      const pet = Pet.findById(req.params.id)
      res.json(pet)
    }catch (e) {
      res.json(e)
    }
  }
}
