let counter = 1;
let intervalID = null;

onmessage = function (event) {
  if (event.data === 'start') {
    if (intervalID !== null) return;
    intervalID = setInterval(updateCounter, 1000);
  } else if (event.data === 'stop') {
    if (intervalID === null) return;
    clearInterval(intervalID);
    intervalID = null;
  }
};

function updateCounter() {
  postMessage(counter);
  counter++;
}
