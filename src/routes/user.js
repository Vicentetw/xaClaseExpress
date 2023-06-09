const express = require("express");
const userController = require('../controllers/userController');
const { authMiddleware } = require("../middleware/authentication");

const router = express.Router();

router.post("/", userController.createUser);

router.get("/", (req, res) => {
  const { name, email } = req.query;
  res.send({ name, email });
});

router.get('/all', authMiddleware, userController.getAll);
router.get("/:userId", authMiddleware, userController.getUser);
router.put("/:userId", authMiddleware, userController.updateUser);
router.delete("/:userId", authMiddleware, userController.deleteUser);

module.exports = router;