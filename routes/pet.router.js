const { Router } = require('express')
const {petController} = require('../controlllers/pet.controller')

const router = Router()

router.get('/', petController.getPets)
router.post('/', petController.addPet)
router.patch('/:id', petController.editPet)
router.delete('/:id', petController.removePet)

module.exports = router
