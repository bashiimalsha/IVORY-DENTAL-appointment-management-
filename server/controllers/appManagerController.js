const AppManager = require("../models/appManagerModel");

const getAppointmentsController = async (_req, _res, _next) => {
  try {
    const appManager = await AppManager.find();
    _res.json(appManager);
  } catch (error) {
    console.error(error);
    _res.status(500).json({ message: 'Internal server error' });
  }
};

const approveAppointmentController = async (_req, _res) => {
  try {
    const { id } = _req.params;
    const updatedAppointment = await AppManager.findByIdAndUpdate(id, { status: 'approved' }, { new: true });
    _res.status(200).json({ message: 'Appointment approved successfully', appointment: updatedAppointment });
  } catch (error) {
    console.error(error);
    _res.status(400).json({ message: 'Error approving appointment', error });
  }
};
/*
const rejectAppointmentController = async (_req, _res) => {
  try {
    const { id } = _req.params;
    const updatedAppointment = await AppManager.findByIdAndUpdate(id, { status: 'rejected' }, { new: true });
    _res.status(200).json({ message: 'Appointment rejected successfully', appointment: updatedAppointment });
  } catch (error) {
    console.error(error);
    _res.status(400).json({ message: 'Error rejecting appointment', error });
  }
};
*/


const handleReject = async (record) => {
  try {
    await axios.delete(`http://localhost:3002/api/patient/reject/${record._id}`);
    setAppointmentData((prevData) =>
      prevData.filter((appointment) => appointment._id !== record._id)
    );
    message.success("Appointment deleted successfully");
  } catch (error) {
    message.error("Failed to delete Appointment");
    console.error(error);
  }
};


module.exports = { getAppointmentsController, approveAppointmentController, handleReject };
