var colors = generaterandomcolors(6);

/* instead of 6 colors we want random color so make a fn for that 
var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(112, 60, 103)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(255, 100, 105)"
] */
var squarecol = document.querySelectorAll(".square");
// set a variable-- RGB COLOR FOR HEADING
// --------------var pickedcolor = colors[2];
var pickedcolor = randlogic();
var coldisplay = document.getElementById("rgbcol");
var message = document.querySelector("#msg");
var head = document.querySelector("h1");
var resetbutton = document.querySelector("#resetcolset");
var easybutton = document.querySelector("#ezybtn");
var hardbutton = document.querySelector("#hardbtn");

easybutton.addEventListener("click", function () {
  easybutton.classList.add("selected");
  hardbutton.classList.remove("selected");
  colors = generaterandomcolors(3);
  pickedcolor = randlogic();
  coldisplay.textContent = pickedcolor;
  for (i = 0; i <= squarecol.length; i++) {
    if (colors[i]) {
      //if there is a color means TRUE under if statement
      squarecol[i].style.backgroundColor = colors[i];
    } else {
      squarecol[i].style.display = "none";
    }
  }
});

hardbutton.addEventListener("click", function () {
  hardbutton.classList.add("selected");
  easybutton.classList.remove("selected");
  colors = generaterandomcolors(6);
  pickedcolor = randlogic();
  coldisplay.textContent = pickedcolor;
  for (i = 0; i <= squarecol.length; i++) {
    squarecol[i].style.backgroundColor = colors[i];
    squarecol[i].style.display = "block";
  }
});

//************* */ LOGIC for the reset button for a new set of color*************
resetbutton.addEventListener("click", function () {
  // change RGB VALUE in heading
  // call the randomcolor shuffle func
  //generate new set of color using func generaterandomcolors()
  colors = generaterandomcolors(6);
  pickedcolor = randlogic();
  coldisplay.textContent = pickedcolor;
  message.textContent = " "; //FOR NOT ALWAYS showing the correct statemnt in the bar when it is reset

  //   change each square color
  for (var i = 0; i < squarecol.length; i++) {
    squarecol[i].style.background = colors[i];
  }
  head.style.background = "#eedbde";
});

// **************************************************************************

coldisplay.textContent = pickedcolor;

for (var i = 0; i < squarecol.length; i++) {
  squarecol[i].style.background = colors[i];

  squarecol[i].addEventListener("click", function () {
    //  alert("YOU HAVE CLICKED " + this.style.background);
    // alert(pickedcolor + " " + clickedcol);
    var clickedcol = this.style.background;
    console.log(pickedcolor + " " + clickedcol);

    if (pickedcolor == clickedcol) {
      message.textContent = "CORRECT!";
      alert("CORRECT ....WELL DONE..");
      changecolor(clickedcol);
      head.style.background = clickedcol;
      resetbutton.textContent = " PLAY AGAIN ";
    } else {
      this.style.backgroundColor = "#eedbde";
      message.textContent = "BETTER LUCK NEXT TIME!";
    }
  });
}

/* clickedcol as an  ARGUEMENT IS passed to this function
 for changing square color for all the block when CORRECT */

function changecolor(color) {
  for (i = 0; i < squarecol.length; i++) {
    squarecol[i].style.background = color;
  }
}

// RANDOM COLOR generator-- chosing a no. 0 - 6
function randlogic() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
// logic for random shalfling colors
function generaterandomcolors(num) {
  var arr = [];

  // looping num no. of times
  for (i = 0; i < num; i++) {
    arr.push(gencolor());
  }
  return arr;
}

function gencolor() {
  // logic for generating random no. 0 - 256
  var r = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);

  return ["rgb(" + r + ", " + g + ", " + b + ")"];
}
