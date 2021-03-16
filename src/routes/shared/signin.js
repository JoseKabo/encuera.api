import { Router } from 'express';
const router = Router();

import * as authCtrl from '../../controllers/login.controllers/signin.controllers';

router.post('/signin', authCtrl.AuthSignIn );



export default router;
