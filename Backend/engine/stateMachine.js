// Allowed transitions
const states = {
  START: ["VALIDATE"],
  VALIDATE: ["PROCESS"],
  PROCESS: ["DONE", "ERROR"],
  ERROR: ["PROCESS"],
  DONE: []
};

// function to move state
function move(currentState, nextState) {
  if (states[currentState].includes(nextState)) {
    return { success: true, state: nextState };
  } else {
    return { success: false };
  }
}

module.exports = move;