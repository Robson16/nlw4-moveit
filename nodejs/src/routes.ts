import { Router } from 'express';
import UserController from './controllers/UserController';
import SurveysController from './controllers/SurveysController';

const router = Router();

const userControler = new UserController();
const surveyControler = new SurveysController();

router.post('/users', userControler.create);

router.post('/surveys', surveyControler.create);
router.get('/surveys', surveyControler.show);

export default router;
