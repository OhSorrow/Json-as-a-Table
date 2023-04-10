let data3 =
  '{"quiz":{"sport":{"q1":{"question":"Which one is correct team name in NBA?","options":["New York Bulls","Los Angeles Kings","Golden State Warriros","Huston Rocket"],"answer":"Huston Rocket"}},"maths":{"q1":{"question":"5 + 7 = ?","options":["10","11","12","13"],"answer":"12"},"q2":{"question":"12 - 8 = ?","options":["1","2","3","4"],"answer":"4"}}}}';

myJson = JSON.parse(data3);

let temp;
const myTable = document.getElementById("myTable");

if (localStorage.getItem("myTable")) {
  myTable.innerHTML = localStorage.getItem("myTable");
} else {
  for (let key1 in myJson.quiz) {
    if (key1 == "sport") {
      document.getElementById(
        "head"
      ).innerHTML += `<th colspan="4">${key1}</th>`;
      for (let key2 in myJson.quiz[key1]) {
        for (let key3 in myJson.quiz[key1][key2]) {
          if (key3 == "question") {
            document.getElementById(
              "question"
            ).innerHTML += `<td contenteditable="true" colspan="4">${myJson.quiz[key1][key2][key3]}</td>`;
          } else if (key3 == "options") {
            for (let option in myJson.quiz[key1][key2][key3]) {
              document.getElementById(
                "options"
              ).innerHTML += `<td contenteditable="true">${myJson.quiz[key1][key2][key3][option]}</td>`;
            }
          } else if ((key3 = "answer")) {
            document.getElementById(
              "answer"
            ).innerHTML += `<td contenteditable="true" colspan="4">${myJson.quiz[key1][key2][key3]}</td>`;
          }
        }
      }
    } else if (key1 == "maths") {
      document.getElementById(
        "head"
      ).innerHTML += `<th colspan="8" >${key1}</th>`;
      for (let key2 in myJson.quiz[key1]) {
        for (let key3 in myJson.quiz[key1][key2]) {
          if (key3 == "question") {
            document.getElementById(
              "question"
            ).innerHTML += `<td contenteditable="true" colspan="4">${myJson.quiz[key1][key2][key3]}</td>`;
          } else if (key3 == "options") {
            for (let option in myJson.quiz[key1][key2][key3]) {
              document.getElementById(
                "options"
              ).innerHTML += `<td contenteditable="true">${myJson.quiz[key1][key2][key3][option]}</td>`;
            }
          } else if ((key3 = "answer")) {
            document.getElementById(
              "answer"
            ).innerHTML += `<td contenteditable="true" colspan="4">${myJson.quiz[key1][key2][key3]}</td>`;
          }
        }
      }
    }
  }
}

myTable.addEventListener("input", () => {
  temp = myTable.innerHTML;
});

document.querySelector("button").addEventListener("click", () => {
  if (temp) {
    localStorage.setItem("myTable", temp);
    alert("Changes saved");
  }
});
