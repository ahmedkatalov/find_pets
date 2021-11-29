const { Router } = require('express')
const {petController} = require('../controlllers/pet.controller')

const router = Router()

router.get('/pets', petController.getPets)
router.get('/pets/:id', petController.getPetById)
router.post('/add', petController.addPet)
router.patch('/pets/:id', petController.editPet)
router.delete('/pets/:id', petController.removePet)

module.exports = router
