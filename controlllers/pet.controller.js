const Pet = require('../models/Pet.model')

module.exports.petController = {
  addPet: async (req, res) => {
    try {
      const pet = await Pet.create({
        img: req.body.img,
        header: req.body.header,
        description: req.body.description,
        user: req.body.user,
        category: req.body.category
      })
      res.json(pet)
    }catch (e) {
      res.json(e)
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
    try {
      const pet = await Pet.findByIdAndUpdate(req.params.id,{
        img: req.body.img,
        header: req.body.header,
        description: req.body.description,
        user: req.body.user,
        category: req.body.category
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
