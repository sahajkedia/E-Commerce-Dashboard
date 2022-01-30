const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ConsumerSchema = new Schema({
    order_id: {
        type:Number,
        // required:true
    },
    customer : {
        type:String,
        // required
    },
    country : {
        type : String,
        // required
    },
    address : {
        type : String,
        // required
    },
    product_title : {
        type : String,
        // required
    },
    product_description : {
        type : String,
        // required
    },
    date:{
        type:String,
        // required
    },
    status: {
        type: String,
        // required
    }
})

module.exports = mongoose.model('Consumer',ConsumerSchema)