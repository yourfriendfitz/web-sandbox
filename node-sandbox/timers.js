const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

const lineFormat = () => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
};

const incTime = () => {
  currentTime += waitInterval;
  const pct = Math.floor((currentTime / waitTime) * 100);
  lineFormat();
  process.stdout.write(`waiting.... ${pct}%`);
};

console.log(`setting a ${waitTime / 1000} second delay`);

const timerFinished = () => {
  clearInterval(interval);
  lineFormat();
  console.log("done");
};

const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);
