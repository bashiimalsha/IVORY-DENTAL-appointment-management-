const express = require('express');
const router = express.Router();
const { getAppointmentsController, approveAppointmentController, handleReject } = require('../controllers/appManagerController');

router.get('/get-app', getAppointmentsController);
router.post('/approve/:id', approveAppointmentController);
router.delete('/reject/:id', handleReject);

module.exports = router; 
