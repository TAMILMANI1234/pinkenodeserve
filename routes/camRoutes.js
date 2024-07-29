const express= require('express');
const router = express.Router();

const CamController = require("../controllers/camController");

router.get("/",CamController.sendCam);
router.post("/insertcam",CamController.addCam);
router.get("/camby_customerid/:id",CamController.getcamby_customerID) 
router.post("/updateby_customerid/:id",CamController.updatecamby_customerID) 
router.patch("/addimage/:id/business_head_visit_image",CamController.business_head_visit_image);
router.patch("/addimage/:id/area_manager_visit_image",CamController.area_manager_visit_image);
router.patch("/addimage/:id/member_document_image",CamController.member_document_image);
router.patch("/addimage/:id/nominee_document_sign_image",CamController.nominee_document_sign_image);
router.patch("/addimage/:id/business_area_image",CamController.business_area_image);

module.exports = router;