import express from 'express';
import { getUsers, getUser } from '../controllers/userController.js';
import auth from '../middleware/auth.js';
import roleCheck from '../middleware/roleCheck.js';

const router = express.Router();

router.get('/', auth, roleCheck('admin'), getUsers);
router.get('/:id', auth, getUser);

export default router;