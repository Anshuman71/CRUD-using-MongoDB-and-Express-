import Express from 'express';
import * as AttendanceController from '../controller/index.mjs';

const routes = new Express.Router();

routes.post('/addAttendance', AttendanceController.addAttendance);
routes.get('/getAll', AttendanceController.getAllAttendance);

export default routes;
