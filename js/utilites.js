function getElementsById(inputId, actions) {
    const action = document.getElementById(inputId).classList.toggle(actions);
    return action;
  }