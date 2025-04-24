import express from 'express';
import {
  createBlog,
  getBlogs,
  getBlog,
  updateBlog,
  deleteBlog
} from '../controllers/blogController.js';
import auth from '../middleware/auth.js';
import roleCheck from '../middleware/roleCheck.js';
import ownerCheck from '../middleware/ownerCheck.js';

const router = express.Router();

router.post('/', createBlog);
router.get('/', getBlogs);
router.get('/:id', getBlog);
router.put('/:id', auth, ownerCheck, updateBlog);
router.delete('/:id', auth, ownerCheck, deleteBlog);

export default router;