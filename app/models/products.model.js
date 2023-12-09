const {Schema,model} = require("mongoose")

const productSchema = new Schema({
   title : {type:String ,required:true },
   description : {type:String ,required:true },
   short_description : {type:String ,required:true },
   images : {type:[String] ,required:false },
   tags : {type:[String] , default:[] },
   category : {type:Types.ObjectId ,required:true },
   comments : {type:[String] , default:[] },
   like : {type:[Types.ObjectId] ,default:[]},
   dislike : {type:[Types.ObjectId] ,default:[]},
   bookmark  : {type:[Types.ObjectId] ,default:[]},
   price : {type:Number ,default:0},
   discount : {type:Number , default:0 },
   count : {type:Number ,default:0 },
   type : {type:String ,required:true },
   time : {type:String ,required:false },
   format : {type:String ,required:false },
   size : {type:Object ,required:false,default:{
      length : 0,
      height:0,
      width:0,
      weight:0,
      madeIn:"",
   } },
})

const productModel = model("products",productSchema)

module.exports = {
   productModel : productModel
}