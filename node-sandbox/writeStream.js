const fs = require("fs")

const writeStream = fs.createWriteStream(file_name, encoding)
const readStream = fs.createReadStream(file_name, encoding)

readStream.on("event_name", data => {
  writeStream.write(data);
});

readStream.pipe(writeStream)
