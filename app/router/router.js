const {Router} = require("express")
const { homeRoutes } = require("./clientApi/home.router")

const router = Router()

router.use("/",homeRoutes)

module.exports = {
    allRoutes : router
}