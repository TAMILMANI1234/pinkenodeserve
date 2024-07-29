const CamModel = require("../models/camModels");
const upload = require('../multer');

//Display Cam data
const sendCam = (req,res,next)=>{
    CamModel.find()
    .then(response=>{
        res.send(response)
    })
    .catch(error=>{
        res.send("An error occur in Displaying Cam")
    })
}

const addCam =(req,res,next)=>{
    let cam = new CamModel({
        customer_id : req.body.customer_id,
        cam_id : req.body.cam_id,
        loan_id: req.body.loan_id,
        branch_name: req.body.branch_name,
        customer_name: req.body.customer_name,
        field_agent_name: req.body.field_agent_name,
        loan_amount: req.body.loan_amount,
        tenure_month: req.body.tenure_months,
        comment_loan_info : req.body.comments_on_loaninfo,
        business_name : req.body.business_name,
        constitution_of_business : req.body.constitution_of_business,
        business_description: req.body.business_description,
        comment_business: req.body.comment_on_business,
        daily_sales : req.body.daily_sales,
        monthly_sales: req.body.monthly_sales,
        margin: req.body.margin,
        gross_profit : req.body.gross_profit,
        comment_sales : req.body.comments_for_sales,
        spouse_income : req.body.spouse_income,
        child_income: req.body.child_income,
        other_income : req.body.other_income,
        total_other_income : req.body.total_other_income,
        total_income : req.body.total_income,
        comment_income : req.body.comments_on_income,
        business_expenses : req.body.business_expenses,
        household_expenses : req.body.household_expenses,
        existing_emis: req.body.existing_emis,
        total_obligation : req.body.total_obligation,
        foir : req.body.foir,
        comment_expenses : req.body.comments_on_expenses,
        cam_report_prepared_by: req.body.cam_report_prepared_by,
        cam_report_verified_by : req.body.cam_report_verified_by
 
    })
   cam.save()
    .then(()=>{
        res.json({
            message:"Cam is added.."
        })
    })
    .catch(error=>{
        res.json({
            message:error
        })
    })
}
 
 

const business_head_visit_image = (req,res)=>{
    upload(req,res,err=>{
        if(err){
            res.send(err)
        }
       const customer_id = req.params.id;
       const data= { business_head_visit_image : req.file.filename};
       CamModel.findOneAndUpdate({customer_id: customer_id},{ $set:data}, { new: true })
       .then(result=>{
            res.json({
                message:"Uploaded..."
            })
       })
       .catch(err=>{
        res.send(err)
       })
    })
}

const area_manager_visit_image = (req,res)=>{
    upload(req,res,err=>{
        if(err){
            res.send(err)
        }
       const customer_id = req.params.id;
       const data= { area_manager_visit_image : req.file.filename};
       CamModel.findOneAndUpdate({customer_id: customer_id},{ $set:data}, { new: true })
       .then(result=>{
            res.json({
                message:"Uploaded..."
            })
       })
       .catch(err=>{
        res.send(err)
       })
    })
}

const member_document_image = (req,res)=>{
    upload(req,res,err=>{
        if(err){
            res.send(err)
        }
       const customer_id = req.params.id;
       const data= { member_document_signing_image : req.file.filename};
       CamModel.findOneAndUpdate({customer_id: customer_id},{ $set:data}, { new: true })
       .then(result=>{
            res.json({
                message:"Uploaded..."
            })
       })
       .catch(err=>{
        res.send(err)
       })
    })
}

const nominee_document_sign_image = (req,res)=>{
    upload(req,res,err=>{
        if(err){
            res.send(err)
        }
       const customer_id = req.params.id;
       const data= {nominee_document_signing_image : req.file.filename};
       CamModel.findOneAndUpdate({customer_id: customer_id},{ $set:data}, { new: true })
       .then(result=>{
            res.json({
                message:"Uploaded..."
            })
       })
       .catch(err=>{
        res.send(err)
       })
    })
}

const business_area_image = (req,res)=>{
    upload(req,res,err=>{
        if(err){
            res.send(err)
        }
       const customer_id = req.params.id;
       const data= {Business_area_image : req.file.filename};
       CamModel.findOneAndUpdate({customer_id: customer_id},{ $set:data}, { new: true })
       .then(result=>{
            res.json({
                message:"Uploaded..."
            })
       })
       .catch(err=>{
        res.send(err)
       })
    })
}



 

const getcamby_customerID=(req,res,next)=>{
    let customerID=req.params.id;
    CamModel.find({"customer_id":customerID})
    .then(response=>{
        res.send(response)
    })
    .catch(error=>{
        res.json({
            message:`error: ${error}`
        })
    })
}

const updatecamby_customerID=(req,res,next)=>{
    let customerID=req.params.id;
    let data = {
        cam_id:req.body.cam_id,
        loan_id:req.body.loan_id,
        branch_name:req.body.branch_name,
        customer_name:req.body.customer_name,
        field_agent_name:req.body.field_agent_name,
        loan_amount: req.body.loan_amount,
        tenure_month: req.body.tenure_month,
        comment_loan_info: req.body.comment_loan_info,
        business_name: req.body.business_name,
        constitution_of_business: req.body.constitution_of_business,
        business_description : req.body.business_description,
        comment_business : req.body.comment_business,
        daily_sales : req.body.daily_sales,
        monthly_sales: req.body.monthly_sales,
        margin: req.body.margin,
        gross_profit:req.body.gross_profit,
        comment_sales: req.body.comment_sales,
        spouse_income: req.body.spouse_income,
        child_income: req.body.child_income,
        other_income:req.body.other_income,
        total_other_income: req.body.total_other_income,
        total_income:req.body.total_income,
        comment_income: req.body.comment_income,
        business_expenses: req.body.business_expenses,
        household_expenses: req.body.household_expenses,
        existing_emis: req.body.existing_emis,
        total_obligation: req.body.total_obligation,
        foir: req.body.foir,
        comment_expenses: req.body.comment_expenses,
        cam_report_prepared_by: req.body.cam_report_prepared_by,
        cam_report_verified_by: req.body.cam_report_verified_by
    }
    CamModel.findOneAndUpdate({"customer_id":customerID},{$set:data})
    .then(response=>{
        res.json({
            message:"updated success"
        })
    })
    .catch(error=>{
        res.json({
            message:`error: ${error}`
        })
    })
}




module.exports={
    sendCam,
    addCam, 
    getcamby_customerID,
    business_head_visit_image,
    area_manager_visit_image,
    member_document_image,
    nominee_document_sign_image,
    business_area_image,
    updatecamby_customerID
}