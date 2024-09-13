const express = require("express");
const userController = require("../controller/user");
const middleWare1 = require("../middleware/middleware1");

const router = express.Router();

router.get("/user",middleWare1,userController.getUsers);
// we can use same route but we cant use same method for same route

router.post("/user",userController.crateUser);

router.put("/user/:id",userController.updateUser);

router.delete("/user/:id",userController.deleteUser);

module.exports = router;
