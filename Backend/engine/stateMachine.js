const states = {
  START: ["VALIDATE"],
  VALIDATE: ["PROCESS"],
  PROCESS: ["REVIEW", "ERROR"], // moved to REVIEW before DONE
  REVIEW: ["DONE", "PROCESS"], // approve → DONE, reject → PROCESS
  ERROR: ["PROCESS"],
  DONE: [],
};

// function to move state
function move(currentState, nextState) {
  // check if current state exists
  if (!states[currentState]) {
    return {
      success: false,
      message: `Invalid current state: ${currentState}`,
    };
  }

  // check if transition is allowed
  if (states[currentState].includes(nextState)) {
    return {
      success: true,
      state: nextState,
      message: `Moved from ${currentState} → ${nextState}`,
    };
  }

  // invalid transition
  return {
    success: false,
    message: `Cannot move from ${currentState} → ${nextState}`,
  };
}

module.exports = move;
