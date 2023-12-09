const joi = require("@hapi/joi")
const authSchema = joi.object({
    email : joi.string().lowercase().trim().email().required(),
    password : joi.string().min(6).max(15).trim().string().required(),
})

module.exports={
    authSchema 
}