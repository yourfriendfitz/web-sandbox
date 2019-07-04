const {
  readdir,
  readFile,
  writeFile,
  mkdir,
  appendFile,
  rename,
  unlink,
  rmdir
} = require("fs");

const dir = readdir(dir_url, (err, directories) => {
  if (err) {
    throw err;
  }
  // returns a list of dir in an array
  return directories;
});

const image = readFile(image_url, (err, image) => {
  if (err) {
    throw err;
  }
  // returns binary
  return image;
});

const text = readFile(file_url, (encoding = "UTF-8"), (err, text) => {
  if (err) {
    throw err;
  }
  // returns string
  return text;
});

const write = writeFile(file_url, data, err => {
  if (err) {
    throw err;
  }
});

const make = mkdir(file_url, err => {
  if (err) {
    throw err;
  }
});

// appendFile will create a file if none exists
const append = appendFile(file_url, content, err => {
  if (err) {
    throw err;
  }
});

const renameFile = rename(file_url, new_url, err => {
  if (err) {
    throw err;
  }
});

const remove = unlink(file_url, err => {
  if (err) {
    throw err;
  }
});

const removeDir = readdir(dir_url, (err, files) => {
  if (err) {
    throw err;
  }
  // all files must be removed from the directory before the dir can be removed
  files
    .forEach(file_url => {
      unlink(file_url, err => {
        if (err) {
          throw err;
        }
      });
    })
    .then(
      removedir(dir_url, err => {
        if (err) {
          throw err;
        }
      })
    );
});
