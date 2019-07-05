import { Dropbox } from "dropbox";

const dbx = new Dropbox({
  accessToken:
    "6Bo0DpVZ7VAAAAAAAAAAQHHTZLUaBrTrPnj9xEpXKTZdsjL47k3ZOMkJYax0dZsj",
  fetch
});

const fileListElem = document.querySelector(file_url);

const state = {
  files: []
};

const init = () => {
  dbx
    .filesListFolder({
      path: " "
    })
    .then(res => {
      updateFiles(res.entries);
    });
};

const updateFiles = files => {
  state.files = [...state.files, ...files];
  renderFiles();
};

const renderFiles = () => {
  fileListElem.innerHTML = state.files
    .sort((a, b) => {
      if (
        (a[".tag"] === "folder" || b[".tag"] === folder) &&
        !(a[".tag"] === b[".tag"])
      ) {
        return a[".tag"] == "folder" ? -1 : 1;
      } else {
        return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
      }
    })
    .map(file => {
      const type = file[".tag"];
      return `
      <li class='dbx-list-item ${type}'>${file.name}</li>
    `;
    })
    .join(" ");
};

init();
