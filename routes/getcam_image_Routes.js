const express= require('express');
const router = express.Router();

const getcamImages = require("../controllers/getcamimageController");

router.get("/get_business_head_visit_image/:id",getcamImages.get_business_head_visit_image);
router.get("/get_Business_area_image/:id",getcamImages.get_Business_area_image);
router.get("/get_area_manager_visit/:id",getcamImages.get_area_manager_visit);
router.get("/get_member_document_sign/:id",getcamImages.get_member_document_sign);
router.get("/get_nominee_document_sing/:id",getcamImages.get_nominee_document_sing);

module.exports = router;
 