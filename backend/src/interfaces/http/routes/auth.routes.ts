import { Router } from 'express';

import { validateRequest } from '../middlewares/auth-validate.middleware';
import { loginSchema, refreshSchema, registerSchema } from '@interfaces/dtos/auth.dto';
import { container } from 'src/container';

const router = Router();
const ctrl = container.authController;


router.post('/register', validateRequest(registerSchema), ctrl.register);
router.post('/login', validateRequest(loginSchema), ctrl.login);

export default router;


