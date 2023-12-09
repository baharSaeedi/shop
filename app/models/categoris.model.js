const {Schema,model} = require("mongoose")

const categorySchema = new Schema({
   title : {type:String ,required:true }, 
})

const categoryModel = model("categorys",categorySchema)

module.exports = {
   categoryModel : categoryModel
}