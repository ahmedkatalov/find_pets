const Pet = require('../models/Pets.model')

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
    }catch (e) {
      res.json(e)
    }
  }
}
