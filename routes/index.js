const { Router } = require("express")

const router = Router()

router.use("/pets", require("./pet.route"))
router.use("/users", require("./user.route"))
router.use("/categories",require("./category.route") )

module.exports = router