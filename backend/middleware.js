const jwt = require("jsonwebtoken");
const JWT_SECRET = require("./config");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(403).json({ err: "some error" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log("decoded", decoded);

    req.userId = decoded.userID || decoded.userId;

    next();
  } catch (err) {
    return res.status(403).json({ err: "Authentication failed" });
  }
};

module.exports = {
  authMiddleware,
};
