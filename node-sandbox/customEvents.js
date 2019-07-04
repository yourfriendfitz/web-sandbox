const events = require("events");
const emitter = new events.EventEmitter();
const goodbye = () => {
  emitter.emit("customEvent", "Goodbye", "System")
}

emitter.on("customEvent", (message, user) => {
  console.log(`${user}: ${message}`);
});

process.stdin.on("data", data => {
  const input = data.toString().trim()
  if (input === "exit") {
    process.exit()
  }
  emitter.emit("customEvent", input, "Fitz's Terminal")
})

process.on("exit", goodbye)
