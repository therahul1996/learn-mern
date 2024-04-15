const asyncHandler = require("express-async-handler");
// @desc Get goals
// @route GET /api/get-goals
//@access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

// @desc Post goals
// @route POST /api/get-goals
//@access Private
const postGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  } else {
    console.log(req.body);
  }
});

// @desc Patch goals
// @route PATCH /api/get-goals
//@access Private
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update Goals ${req.params.id}` });
});

// @desc Delete goals
// @route DELETE /api/get-goals
//@access Private
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete Goals ${req.params.id}` });
});
module.exports = {
  getGoals,
  postGoals,
  updateGoals,
  deleteGoals,
};
