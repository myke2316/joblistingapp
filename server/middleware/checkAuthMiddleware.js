import jwt from "jsonwebtoken";

export const checkAuthMiddleware = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {

    return next();
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    return res.status(400).json({ message: "Already logged in" });
  } catch (error) {

    next();
  }
};
