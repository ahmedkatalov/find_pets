const Category = require("../models/Category.model")

module.exports.categoriesController = {
    addCategory: async (req, res) => {
        const {name} = req.body;

        try {
            const category = await Category.create({name: name})

            res.json(category)
        } catch (e) {
            res.json(e)
        }
    },

    getAllCategories: async (req, res) => {
        try {
            const categories = await Category.find()

            res.json(categories)
        } catch (e) {
            res.json(e)
        }
    },

    removeCategory: async (req, res) => {
        try {
            await Category.findByIdAndRemove(req.params.id)

            res.json("Категория удалена")
        } catch (e) {
            res.json(e)
        }
    },

    editCategory: async (req, res) => {
        try {
            await Category.findByIdAndUpdate(req.params.id, {
                $set: req.body
            })

            res.json("Категория изменена")
        } catch (e) {
            res.json(e)
        }
    }
}