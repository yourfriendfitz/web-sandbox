const cp = require("cp");

const app = cp.spawn("node", [file_url]);

app.stdout.on("start", data => {
  return data
});

app.onn("close" () => {
  function()
});
