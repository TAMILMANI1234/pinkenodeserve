const express= require('express');
const router = express.Router();
const customerController = require("../controllers/customerController");

router.get("/",customerController.sendCustomerdata);
router.get("/getbyid/:id",customerController.getcustomerbyID);
router.patch("/updatecamStatus/:id",customerController.updatecamStatus_customerID);
 

module.exports = router;