const cp = require("child_process");

cp.exec("open http://www.google.com");

cp. exec("open --a Terminal")

cp.exec("ls", (err, data, stderr) => {
  if (err) {
    throw err
  } else if (stderr) {
    throw stderr
  }
  console.log(data);
});
