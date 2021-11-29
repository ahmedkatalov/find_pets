const { Router } = require('express')
const {petController} = require('../controlllers/pet.controller')

const router = Router()

router.get('/', petController.getPets)
router.get('/:id', petController.getPetById)
router.post('/add', petController.addPet)
router.patch('/:id', petController.editPet)
router.delete('/remove/:id', petController.removePet)

module.exports = router
