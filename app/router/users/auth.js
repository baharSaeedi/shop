const {Router} = require("express")
const AuthController = require("../../http/controllers/users/auth/auth.controller")

const router = Router()

router.post("/login",AuthController.indexPage)

module.exports = {
    AuthRoutes : router
}