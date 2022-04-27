var hero = document.querySelector("#hero");
var villain = document.querySelector("#villain");
var lightning = document.querySelector("#lightning");


//setup animtion code start here


//var light start from
let lightningStart = { "left": "900px", "top": "250px" };
let lightningEnd = { "left": "100px", "top": "100px" };
let options = { "duration": 10000 };
//duration of animation for second

//second animation to go back to the point
let villainStart = { "height": "200px" };
let villainEnd = { "height": "2px" };
let o = { "duration": 1000 };

//running the animation
//lightning is objet from top 
setTimeout(() => {lightning.animate([lightningStart, lightningEnd], options)},1000);

setTimeout(() => { villain.animate([villainStart, villainEnd], o) }, 10000);

setTimeout(() => { lightning.animate([lightningEnd, lightningStart], 1000) }, 10000);

//animaton to destroy villan





