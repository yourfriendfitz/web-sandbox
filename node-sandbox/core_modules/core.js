const path = require("path");
const { log } = require("util");
const { getHeapStatistics } = require("v8");

const dirUploads = path.join(__dirname, "www", "files", "uploads");

log(dirUploads);

log(path.basename(__filename));
log(" ^ The current file name");

log(getHeapStatistics());
