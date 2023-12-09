const {Router} = require("express")
const { homeRoutes } = require("./clientApi/home.router")
const { AuthRoutes } = require("./users/auth")

const router = Router()

router.use("/",homeRoutes)
router.use("/user",AuthRoutes)

module.exports = {
    allRoutes : router
}