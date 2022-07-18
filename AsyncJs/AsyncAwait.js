const datas = [
  { name: "Prasad", proffesion: "Software Engineer" },
  { name: "Vikesh", proffesion: "Data Scintist" },
];

function getDatas() {
  setTimeout(() => {
    let output = "";
    datas.forEach((data, idx) => {
      output += `<li>${data.proffesion}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
}

// getDatas();

function createPushData(newData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      datas.push(newData);
      let isError = false;
      if (!isError) {
        resolve();
      } else {
        reject("Something went wrong!!");
      }
    }, 2000);
  });
}

async function printData() {
  await createPushData({ name: "Pratyush", proffesion: "Data Engineer" });
  getDatas();
}

printData();
