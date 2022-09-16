const router = require("express").Router();
const { User } = require("../../models");

router.post("/signup", async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    // req.session.user_id = newUser.id;
    req.session.logged_in = true;

    req.session.save(() => {
      res.status(200).json(newUser);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

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
    req.session.user_id = userData.id;
    req.session.logged_in = true;

    req.session.save(() => {
      res.json({ user: userData, message: "You are logged in" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.get("/allUsers", async (req, res) => {
  try {
    const allUsers = await User.findAll();
    // console.log(allUsers);
    // const allUsersData = "hello";
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;
