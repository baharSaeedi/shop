const {Router} = require("express")
const homeController = require("../../http/controllers/clientApi/home.controller")

const router = Router()

router.get("/",homeController.indexPage)

module.exports = {
    homeRoutes : router
}