const router = require("express").Router();
const { User } = require("../../models");

//* creates a new user and logs in
router.post("/signup", async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.username = newUser.username;
      req.session.logged_in = true;
      res.status(200).json(newUser);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//* logs in a user who already exists in the database
router.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });

    if (!userData) {
      res.status(400).json({ message: "Oops... something wrong. Try again." });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);
    console.log(validPassword);

    if (!validPassword) {
      res.status(400).json({ message: "Oops...  something wrong. Try again." });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.username = userData.username;
      res.json({ user: userData, message: "You are logged in" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//* logs out current user, returns 404 if nobody is logged in
router.post("/logout", (req, res) => {
  let user = req.session.username;
  console.log(user);
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(200).json({ message: `${user} was logged out` });
    });
  } else {
    res
      .status(404)
      .json({ message: "Nobody was logged in, so nobody was logged out" });
  }
});

//* returns all users in the database
router.get("/allUsers", async (req, res) => {
  try {
    const allUsers = await User.findAll();
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(400).json(err);
  }
});

//* returns who is currently logged in
router.get("/whoLoggedIn", async (req, res) => {
  if (req.session.username) {
    res
      .status(200)
      .json({ message: `${req.session.username} is currently logged in` });
  } else {
    res.status(400).json({ message: "nobody logged in" });
  }
});
module.exports = router;
