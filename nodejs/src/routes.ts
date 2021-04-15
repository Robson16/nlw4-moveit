import { Router } from 'express';
import UserController from './controllers/UserController';
import SurveysController from './controllers/SurveysController';
import SendMailController from './controllers/SendMailController';

const router = Router();

const userControler = new UserController();
const surveyControler = new SurveysController();
const sendMailController = new SendMailController();

router.post('/users', userControler.create);

router.post('/surveys', surveyControler.create);
router.get('/surveys', surveyControler.show);

router.post('/sendMail', sendMailController.execute);

export default router;
