const {Schema,model,Types} = require("mongoose")

const blogSchema = new Schema({
   author : {type:Types.ObjectId ,required:true },
   title : {type:String ,required:true },
   text : {type:String ,required:true },
   image : {type:String ,required:true },
   tags : {type:[String] , default:[] },
   category : {type:Types.ObjectId ,required:true },
   comments : {type:[String] , default:[] },
   like : {type:[Types.ObjectId] ,default:[]},
   dislike : {type:[Types.ObjectId] ,default:[]},
   bookmark  : {type:[Types.ObjectId] ,default:[]},

})

const blogModel = model("blogs",blogSchema)

module.exports = {
   blogModel : blogModel
}