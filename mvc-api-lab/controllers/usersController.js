// controllers/usersController.js

const uuid = require("uuid");
const users = require("../models/users");

// Get All users
const getAllusers = (req, res) => {
  console.log("Tuli getAllusers");
  res.json(users);
};

// Get Single user by ID
const getuserById = (req, res) => {
  const found = users.some((user) => user.id === parseInt(req.params.id));

  if (found) {
    res.json(users.filter((user) => user.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
  }
};

// Create a New user
const createuser = (req, res) => {
  const newuser = {
    id: uuid.v4(),
    ...req.body,
  };

  if (!newuser.name || !newuser.email) {
    return res.status(400).json({ msg: "Please include a name and email" });
  }

  users.push(newuser);
  res.json(users);
};

// Update user by ID
const updateuser = (req, res) => {
  const found = users.some((user) => user.id === parseInt(req.params.id));

  if (found) {
    users.forEach((user, i) => {
      if (user.id === parseInt(req.params.id)) {
        users[i] = { ...user, ...req.body };
        res.json({ msg: "user updated", user: users[i] });
      }
    });
  } else {
    res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
  }
};

// Delete user by ID
const deleteuser = (req, res) => {
  const found = users.some((user) => user.id === parseInt(req.params.id));

  if (found) {
    const updatedusers = users.filter(
      (user) => user.id !== parseInt(req.params.id)
    );
    res.json({ msg: "user deleted", users: updatedusers });
  } else {
    res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
  }
};

module.exports = {
  getAllusers,
  getuserById,
  createuser,
  updateuser,
  deleteuser,
};
