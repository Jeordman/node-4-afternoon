module.exports = (req, res, next) => {
  console.log(1111);
  if (!req.session.user) {
    req.session.user = { username: "", cart: [], total: 0 };
  }

  next();
};
