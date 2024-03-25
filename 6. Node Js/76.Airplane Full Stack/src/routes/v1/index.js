const express = require('express');
const router = express.Router();

const { InfoController } = require('../../controllers');
const airplaneRouter=require('./airplane-route');



// /api/v1/airplanes  POST request
router.use('/airplanes', airplaneRouter);


router.get('/info', InfoController.info);

module.exports = router;