const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL)
  .then((response) => {
    if (response.ok) {
      let data = response.json();
      return data;
    } else {
      console.log("Somthing went wrong !!");
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
