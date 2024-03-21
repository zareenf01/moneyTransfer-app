const express = require("express");
const jwt = require("jsonwebtoken");
const { createUser, signIn, updateUser } = require("../types");
const { User, Account } = require("../db");
const JWT_SECRET = require("../config");
const { authMiddleware } = require("../middleware");
const router = express.Router();

router.post("/signup", async (req, res) => {
  const { success } = createUser.safeParse(req.body);
  if (!success) {
    res.status(411).json({
      msg: "Incorrect Inputs",
    });
  }

  const existingUser = await User.findOne({
    email: req.body.email,
  });
  if (existingUser) {
    return res.status(411).json({
      msg: "Email already exists",
    });
  }

  const user = await User.create({
    email: req.body.email,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  });

  const userId = user._id;

  await Account.create({
    userId,

    balance: 1 + Math.random() * 10000,
  });

  const _token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );

  res.status(200).json({
    msg: "User created successfully!",
    token: _token,
  });
});

router.post("/signin", async (req, res) => {
  const { success } = signIn.safeParse(req.body);
  if (!success) {
    res.status(411).json({
      msg: "Incorrect Inputs",
    });
  }

  const login = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (login) {
    const _token = jwt.sign(
      {
        userID: login._id,
      },
      JWT_SECRET
    );
    res.status(200).json({
      msg: "Logged in successfully!",
      token: _token,
    });

    return;
  }

  res.status(411).json({
    msg: "User not found",
  });
});

router.put("/", authMiddleware, async (req, res) => {
  const { success } = updateUser.safeParse(req.body);
  if (!success) {
    res.status(411).json({
      msg: "Incorrect Inputs",
    });
  }
  await User.updateOne(
    {
      _id: req.userId,
    },
    req.body
  );
  res.status(200).json({
    msg: "Updated successfully!",
  });
});

router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        firstname: {
          $regex: filter,
        },
      },
      {
        lastname: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      email: user.email,
      firstName: user.firstname,
      lastName: user.lastname,
      id: user._id,
    })),
  });
});

module.exports = router;
