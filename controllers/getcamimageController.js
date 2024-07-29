const CamModel = require("../models/camModels");
const path = require("path");

const get_business_head_visit_image = (req,res)=>{
    const customer_id =  req.params.id;
     CamModel.find({"customer_id" : customer_id})
    .then((response)=>{  
         if(response[0].area_manager_visit_image!=undefined){
            res.sendFile(path.join(path.join(__dirname,'..',`uploads/verification/${customer_id}/${response[0].business_head_visit_image}`)))
         }
         else{
              res.json({
                  message :"No Image is Uplaod"
              })
         }
         
     })
    .catch(err=>{
        res.json({
            message:"error"
        })
    })
    
}

const get_member_document_sign = (req,res)=>{
    const customer_id =  req.params.id;
     CamModel.find({"customer_id" : customer_id})
    .then((response)=>{ 
        if(response[0].member_document_signing_image!=undefined){
            res.sendFile(path.join(path.join(__dirname,'..',`uploads/verification/${customer_id}/${response[0].member_document_signing_image}`)))
        }
        else{
            res.json({
                message :"No Image is Uplaod"
            })
        }
       
    })
    .catch(err=>{
        res.json({
            message:"error"
        })
    })
    
}

const get_area_manager_visit = (req,res)=>{
    const customer_id =  req.params.id; 
    CamModel.find({"customer_id" : customer_id})
    .then((response)=>{
        if(response[0].area_manager_visit_image!=undefined){
            res.sendFile(path.join(path.join(__dirname,'..',`uploads/verification/${customer_id}/${response[0].area_manager_visit_image}`)))
        }
        else{
            res.json({
                message :"No Image is Uplaod"
            })
        }
    })
    .catch(err=>{
        res.json({
            message:"error"
        })
    })
    
}

const get_nominee_document_sing = (req,res)=>{
    const customer_id =  req.params.id; 
    CamModel.find({"customer_id" : customer_id})
    .then((response)=>{
        if(response[0].nominee_document_signing_image!=undefined){
        res.sendFile(path.join(path.join(__dirname,'..',`uploads/verification/${customer_id}/${response[0].nominee_document_signing_image}`)))
        }
        else{ 
            res.json({
                message :"No Image is Uplaod"
            })
        }
    })
    .catch(err=>{
        res.json({
            message:"error"
        })
    })
    
}
const get_Business_area_image = (req,res)=>{
    const customer_id =  req.params.id; 
    CamModel.find({"customer_id" : customer_id})
    .then((response)=>{
        if(response[0].Business_area_image!=undefined){
            res.sendFile(path.join(path.join(__dirname,'..',`uploads/verification/${customer_id}/${response[0].Business_area_image}`)))
        }
        else{
            res.json({
                message :"No Image is Uplaod"
            })
        }
    })
    .catch(err=>{
        res.json({
            message:"error"
        })
    })
    
}

module.exports = {
     get_business_head_visit_image,
     get_nominee_document_sing,
     get_Business_area_image,
     get_member_document_sign,
     get_area_manager_visit
}