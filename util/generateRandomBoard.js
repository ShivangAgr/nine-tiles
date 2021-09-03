// generates a random sequence of numbers between 1 to 9
const generateRandomBoard = () => {
  let boardData = [];
  for (let i = 0; i < 9; ++i) {
    let newNum = Math.ceil(Math.random() * 9);
    while (boardData.includes(newNum)) newNum = Math.ceil(Math.random() * 9);
    boardData.push(newNum);
  }
  return boardData;
};

export default generateRandomBoard;
