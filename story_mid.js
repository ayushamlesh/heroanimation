//Setup website here
let hero = document.querySelector("#hero");
let villain = document.querySelector("#villain");
let lightning = document.querySelector("#lightning");

//Setup animation code here
let lghtningStart = { "right": "25px" };
let lightningEnd = { "left": "900px" };
let options = { "duration": 1000 };

//Run animation code here
lightning.animate([lightningStart, lightningEnd], options);