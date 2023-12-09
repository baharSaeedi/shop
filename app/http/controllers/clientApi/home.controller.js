const controller = require("../controller");

module.exports = new class HomeController extends controller{
    // constructor(){

    // }

    indexPage (req,res,next){
        return res.status(200).send("hi!")
    }
}