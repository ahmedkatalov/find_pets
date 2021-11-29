const { Router } = require("express")

const router = Router()

router.use("/pets", require("./pet.route"))
router.use("/user", require("./user.route"))
router.use("/category",require("./category.route") )

module.exports = router