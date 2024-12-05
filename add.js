onmessage = function (e) {
  let sum = 0;
  let from = parseInt(e.data.from);
  let to = parseInt(e.data.to);
  let result = from * to;
  this.postMessage(result);
};
