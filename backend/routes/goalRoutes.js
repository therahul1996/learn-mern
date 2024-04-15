const express = require("express");
const router = express.Router();
const {
  getGoals,
  postGoals,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalsController");

// define route new version
router.route("/").get(getGoals).post(postGoals);
router.route("/:id").patch(updateGoals).delete(deleteGoals);

// define route old version
// router.get("/", getGoals);
// router.post("/", postGoals);
// router.patch("/:id", updateGoals);
// router.delete("/:id", deleteGoals);

module.exports = router;
