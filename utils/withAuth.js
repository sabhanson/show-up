const withAuth = (req, res, next) => {
  if (!req.session.user_id) {
    res.redirect("/login");
  } else {
    next();
  }
};

const withAuthAPI = (req, res, next) => {
  if (!req.session.user_id) {
    res.status(403).json({ message: "oops" });
  } else {
    next();
  }
};

module.exports = { withAuth, withAuthAPI };
