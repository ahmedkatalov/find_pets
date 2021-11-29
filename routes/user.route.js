const {Router} = require("express")
const { userController } = require("../controlllers/user.controller")


const router = Router()

router.post("/add", userController.addUser)
router.delete("/delete", userController.removeUser)
router.get("/add", userController.getUsers)

module.exports = router
