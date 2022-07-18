const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new Error("Somthing went wrong!!"));
      }
    };

    xhr.onerror = function () {
      reject(new Error("Somthing went wrong!!"));
    };
    xhr.send();
  });
}

sendRequest("GET", URL).then((response) => {
  const data = JSON.parse(response);
  return data
}).then(data => {
    const id = data[3].id;
    return id;
}).then(id => {
    const url = `${URL}/${id}`;
    return sendRequest("GET", url);
}).then((newResponce) => {
    const newData = JSON.parse(newResponce);
    console.log(newData);
}).catch((err) => {
    console.log(err);
});
