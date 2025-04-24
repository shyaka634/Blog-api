import { verifyToken } from '../utils/jwtHelper.js';
import User from '../models/User.js';

/**
 * Protect routes by validating JWT and loading user.
 */
const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

  try {
    const decoded = verifyToken(token);
    req.user = await User.findById(decoded.id).select('-password');
    next();
  } catch {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

export default auth;