const {Router} = require("express")
const {categoriesController} = require("../controlllers/category.controller");

const router = Router()

router.post("/add", categoriesController.addCategory)
router.get("/", categoriesController.getAllCategories)
router.delete("/remove/:id", categoriesController.removeCategory)
router.patch("/update/:id", categoriesController.editCategory)

module.exports = router;