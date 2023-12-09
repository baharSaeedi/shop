const controller = require("../controller");

module.exports = new class AuthController extends controller{
    login (req,res,next){
        try {
            return res.status(200).send("hi!")
        } catch (error) {
            next(error)
        }
    }
}

