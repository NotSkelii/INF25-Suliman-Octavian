function fetchJsonData(url, callback) {
  fetch(url)
    .then((r) => r.text())
    .then((text) => console.log(text));
}
