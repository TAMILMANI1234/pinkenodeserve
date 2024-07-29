const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    customer_name:{
        type:String
    },
    customer_id:{
        type:String
    },
    cam_status :{
        type: Boolean
    },
    cam_id :{
        type:String
    }
})

module.exports=mongoose.model('customers',customerSchema);