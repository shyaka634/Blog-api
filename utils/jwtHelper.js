import jwt from 'jsonwebtoken';

/**
 * Generate a JWT for a user.
 */
export const generateToken = (user) =>
  jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

/**
 * Verify a JWT and return the decoded payload.
 */
export const verifyToken = (token) => jwt.verify(token, process.env.JWT_SECRET);