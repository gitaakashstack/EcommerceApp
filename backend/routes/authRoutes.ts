import { Router } from "express";
import { getUserInfoHandler, loginHandler, registerHandler } from "../controllers/authController";
import { decodeAuthToken } from "../middlewares/authMiddleware";

const router = Router();


router.post('/register', registerHandler);
router.post('/log-in', loginHandler);
router.get('/userinfo', decodeAuthToken, getUserInfoHandler);

const x = () => {
  return () => { }
};

router.put('/sd', x());

export default router;