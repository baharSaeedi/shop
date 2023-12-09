const joi = require("@hapi/joi")
const authSchema = joi.object({
    email : joi.lowercase().trim().string().email().required(),
    password : joi.min(6).max(15).trim().string().required(),
})

module.exports={
    authSchema 
}