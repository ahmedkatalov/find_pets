const { Router } = require('express')
const {petController} = require('../controlllers/pet.controller')
const upload = require('../middleware/upload')

const router = Router()

router.get('/', petController.getPets)
router.get('/:id', petController.getPetById)
router.post('/add', upload.single('img'), petController.addPet)
router.patch('/:id', petController.editPet)
router.delete('/remove/:id', petController.removePet)

module.exports = router
