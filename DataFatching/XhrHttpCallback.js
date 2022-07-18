// XHR --> Xml Http Request
const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

// console.log(xhr.readyState);
xhr.open('GET', URL);
// console.log(xhr.readyState);

//  it look state change in request (***)

// xhr.onreadystatechange = function() {
//     // const responce = xhr.response;
//     // console.log(responce);
//     console.log(xhr.readyState);
// }

// it triggerd when state is 4 which is sucess state(***)

xhr.onload = function() {
    const res = xhr.response;
    const data = JSON.parse(res);
    // console.log(data);
    const id = data[3].id;
    // console.log(id);
    const xhr2 = new XMLHttpRequest();    // --------> THIS IS CALL BACK HELL
    const URL2 = `${URL}/${id}`;
    xhr2.open('GET', URL2);
    xhr2.onload = () => {
        const res2 = xhr2.response;
        const data2 = JSON.parse(res2);
        console.log(data2);

    }
    xhr2.send();
}

// console.log(xhr.readyState);

xhr.send();

// console.log(xhr.readyState);

