const {Router} = require("express")
const { userController } = require("../controlllers/user.controller")


const router = Router()

router.post("/add", userController.addUser)
router.delete("/delete", userController.removeUser)
router.get("/", userController.getUsers)
router.post("/login", userController.login)
router.post("/profile", userController.getUserById)

module.exports = router
