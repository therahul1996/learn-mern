const asyncHandler = require("express-async-handler");
const Goal = require("../model/goalsmodal");
// @desc Get goals
// @route GET /api/get-goals
//@access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});

// @desc Post goals
// @route POST /api/get-goals
//@access Private
const postGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const goal = await Goal.create({
    text: req.body.text,
  });
  res.status(200).json(goal);
});

// @desc Patch goals
// @route PATCH /api/get-goals
//@access Private
const updateGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateGoal);
});

// @desc Delete goals
// @route DELETE /api/get-goals
//@access Private
const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  await Goal.deleteOne({ _id: req.params.id });
  res.status(200).json({ id: req.params.id });
});
module.exports = {
  getGoals,
  postGoals,
  updateGoals,
  deleteGoals,
};
