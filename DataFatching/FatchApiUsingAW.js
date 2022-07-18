const URL = "https://jsonplaceholder.typicode.com/posts";

async function getPosts() {
  let response = await fetch(URL);
  if (!response.ok) {
    console.log("Something went wrong!!");
  }
  let data = await response.json();
  //   console.log(data);
  return data;
}

getPosts()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
