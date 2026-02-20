const express = require("express");
const router = express.Router();
const move = require("../engine/stateMachine");

let currentState = "START";

// check state
router.get("/state", (req, res) => {
  res.json({ currentState });
});

// browser se state change
router.get("/next/:state", (req, res) => {

  const nextState = req.params.state;

  const result = move(currentState, nextState);

  if (result.success) {
    currentState = result.state;
  }

  res.json({
    currentState,
    result
  });
});

module.exports = router;


//  Its create API..