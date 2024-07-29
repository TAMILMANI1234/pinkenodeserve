const customerModel = require("../models/customerModels");

//Send customer data
const sendCustomerdata = (req,res,next)=>{
    customerModel.find()
    .then(response=>{
        res.send(response)
    })
    .catch(error=>{
        res.send(error)
    })
}

//get customer by ID
const getcustomerbyID=(req,res,next)=>{
    let customerID=req.params.id;
    customerModel.find({"customer_id":customerID})
    .then(response=>{
        res.send(response)
    })
    .catch(error=>{
        res.json({
            message:`error: ${error}`
        })
    })
}

const updatecamStatus_customerID=(req,res,next)=>{
    let customerID=req.params.id;
    let data = req.body;
    console.log(data)
    customerModel.findOneAndUpdate({"customer_id":customerID},{$set:data},{ new: true })
     .then(response=>{
        res.json({
            message:"updated success from customer"
        })
    })
    .catch(error=>{
        res.json({
            message:`error: ${error}`
        })
    })
}

 

module.exports= {
    sendCustomerdata,
    getcustomerbyID,
    updatecamStatus_customerID
};
