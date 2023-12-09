const {Schema,model} = require("mongoose")

const paymentSchema = new Schema({

})

const paymentModel = model("payments",paymentSchema)

module.exports = {
   paymentModel : paymentModel
}