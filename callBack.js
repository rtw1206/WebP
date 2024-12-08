const add = (x, y) => x + y;
const displayResult = (output) => {
  console.log(`결과는 ${output} 입니다.`);
};

const processAndDisplay = (result, callback) => {
  callback(result);
};

processAndDisplay(add(10, 20), displayResult);
