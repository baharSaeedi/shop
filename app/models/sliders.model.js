const {Schema,model} = require("mongoose")

const sliderSchema = new Schema({
   title : {type:String ,required:true },
   text : {type:String  },
   image : {type:String ,required:true },
   type : {type:String ,default:"main"},
})

const sliderModel = model("sliders",sliderSchema)

module.exports = {
   sliderModel : sliderModel
}