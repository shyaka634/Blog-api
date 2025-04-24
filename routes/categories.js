import express from 'express';
import { createCategory, getCategories } from '../controllers/categoryController.js';
import auth from '../middleware/auth.js';
import roleCheck from '../middleware/roleCheck.js';

const router = express.Router();

router.post('/', auth, roleCheck('admin'), createCategory);
router.get('/', getCategories);

export default router;