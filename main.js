console.log("main.js loaded!");

// let persArray = ["Ana", "are", "mere"];

// let counter = 0;

// for (let i = 0; i < persArray.length; i++) {
//   console.log("");
//   console.log(persArray[i]);
//   for (let j = 0; j < persArray[i].length; j++) {
//     if (persArray[i][j] === "r" || persArray[i][j] === "R") {
//       counter++;
//     }
//   }
// }

// console.log(counter);

let map1d = [1, 4, 6, -4];

let map2d = [
  [1, 4, 6, 4],
  [1, 3, 8, 2],
  [2, 1, 1, 0],
];

for (let i = 0; i < map2d.length; i++) {
  // console.log(map2d[i]);
  let row = "";
  for (let j = 0; j < map2d[i].length; j++) {
    row = row + "\t" + map2d[i][j];
  }
  console.log(row);
}

// let persParams = ['Name', 'Surname', 'Age', 'Weight', 'Height', 'Salary'];
// let persArray = [
//     ['Ana', 'Pop', 25, 62.4, 1.70, 4500],
//     ['Aalin', 'Nanu', 15, 54.4, 1.20, 200],
//     ['Maria', 'Lanus', 65, 64.4, 1.50, 1200]
// ]

// for (let i = 0; i < persArray.length; i++) {
//     console.log('');
//     for (let j = 0; j < persArray[i].length; j++) {
//         console.log(persParams[j] + ': ' + persArray[i][j]);
//     }
// }

//JSON - JavaScript Object Notation

// let persObj = {
//     name: 'Ana',
//     surname: 'Pop',
//     age: 25,
//     weight: 62.4,
//     height: 1.70
// };
// console.log(persObj);

// let persObjArray = [
//     {
//         name: 'Ana',
//         surname: 'Pop',
//         age: 25,
//         weight: 62.4,
//         height: 1.70
//     },
//     {
//         name: 'Aalin',
//         surname: 'Nanu',
//         age: 15,
//         weight: 54.4,
//         height: 1.20
//     }
// ];
// console.log(persObjArray);

// let quote = {
//     "categories": [
//       "science"
//     ],
//     "created_at": "2020-01-05 13:42:19.324003",
//     "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
//     "id": "zfgekm2usfyfra7m5x0wta",
//     "updated_at": "2020-01-05 13:42:19.324003",
//     "url": "https://api.chucknorris.io/jokes/zfgekm2usfyfra7m5x0wta",
//     "value": "If tapped, a Chuck Norris roundhouse kick could power the country of Australia for 44 minutes."
//   };

//   console.log(quote);

//   let serverQuote = '{"categories":["science"],"created_at":"2020-01-05 13:42:19.324003","icon_url":"https://assets.chucknorris.host/img/avatar/chuck-norris.png","id":"zfgekm2usfyfra7m5x0wta","updated_at":"2020-01-05 13:42:19.324003","url":"https://api.chucknorris.io/jokes/zfgekm2usfyfra7m5x0wta","value":"If tapped, a Chuck Norris roundhouse kick could power the country of Australia for 44 minutes."}';
//   let parsedQuote = JSON.parse(serverQuote);
//   console.log(parsedQuote.value);

let displayDiv = document.querySelector("#display-quote");

function getQuote() {
  fetch("https://api.chucknorris.io/jokes/random?category=science")
    .then((response) => response.json())
    .then(function (data) {
      displayDiv.innerText = data.value;
    });
}
