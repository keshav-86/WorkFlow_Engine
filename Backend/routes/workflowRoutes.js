const express = require("express");
const router = express.Router();
const move = require("../engine/stateMachine");

// initial state
let currentState = "START";
let history = ["START"];

// home route
router.get("/", (req, res) => {
  res.send("Workflow Engine Running 🚀");
});

// get current state
router.get("/state", (req, res) => {
  res.json({ currentState });
});

// move to next state
router.get("/next/:state", (req, res) => {
  const nextState = req.params.state;

  const result = move(currentState, nextState);

  if (result.success) {
    currentState = result.state;
    history.push(currentState);
  }

  res.json({
    currentState,
    history,
    result: result.success
      ? result
      : {
          success: false,
          message: `Cannot move from ${currentState} to ${nextState}`
        }
  });
});

// history route
router.get("/history", (req, res) => {
  res.json({ history });
});

// reset workflow
router.get("/reset", (req, res) => {
  currentState = "START";
  history = ["START"];

  res.json({
    message: "Workflow reset successful",
    currentState,
    history
  });
});

module.exports = router;