import Blog from '../models/Blog.js';

/**
 * Ensure the authenticated user is the owner of the blog (or an admin).
 */
const ownerCheck = async (req, res, next) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).json({ message: 'Blog not found' });

  if (blog.author.toString() !== req.user.id && req.user.role !== 'admin')
    return res.status(403).json({ message: 'Not authorized' });

  next();
};

export default ownerCheck;