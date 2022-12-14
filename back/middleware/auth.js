const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    console.log("auth fonction");
    console.log(req.body);
    const token = req.headers.authorization.split(" ")[1];

    const decodedToken = jwt.verify(token, process.env.KEY_JWT);

    const userId = decodedToken.userId;
    req.auth = {
      userId: userId,
    };
    next();
  } catch (error) {
    console.log(error); //res.status(401).json({ error })
  }
};
