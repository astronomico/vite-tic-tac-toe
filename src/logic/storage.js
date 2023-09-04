export const saveToLocalStorage = ({ newBoard, newTurn }) => {
  window.localStorage.setItem("board", JSON.stringify(newBoard));
  window.localStorage.setItem("turn", JSON.stringify(newTurn));
};

export const clearFromLocalStorage = () => {
  if (
    window.localStorage.getItem("board") &&
    window.localStorage.getItem("turn")
  ) {
    window.localStorage.removeItem("board");
    window.localStorage.removeItem("turn");
  }
};
