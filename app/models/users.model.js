 const {Schema,model} = require("mongoose")

 const userSchema = new Schema({
   firstname : {type:String  },
   lastname : {type:String  },
   username : {type:String ,required:true ,lowercase:true},
   phone : {type:String ,required:true },
   email : {type:String ,required:true,lowercase:true  },
   password : {type:String ,required:true },
   otp : {type:Object ,default:{
      code:0,
      expires:0
   } },
   bills:{type:[],default:[]},
   discount:{type:Number,default:0 },
   birthday:{type:String},
   discount:{type:[String],default:"USER" },
 })

 const userModel = model("users",userSchema)

 module.exports = {
    userModel : userModel
 }