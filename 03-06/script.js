/************
 * N.B. The ghosts are SVGs, so it's 'fill', not 'color' you need to change
 *************/

// GET BY ID
const firstGhost = document.getElementById("first_ghost");
firstGhost.style.fill = "orange";

// GET BY CLASSNAME
const secondWave = document.getElementsByClassName("second_wave");
secondWave[0].style.fill = "blue";
secondWave[1].style.fill = "blue";

// GET AREA, DRILL DOWN using GET BY TAG NAME
const areaFiddyOne = document
  .getElementById("area-51")
  .getElementsByTagName("svg");
for (let i = 0; i < areaFiddyOne.length; i++) {
  const element = areaFiddyOne[i];
  element.style.fill = "green";
}

// querySelector nth-child

const nth = document.querySelector("#area-51 > svg:nth-last-child(2)");
nth.style.stroke = "red";
nth.style.strokeWidth = "15px";

// from the last child, select the div immediately above the ghost and make its border '5px dashed'
const dash = nth.parentElement;
dash.style.border = "5px dashed";

// querySelectorAll
const fiddy = document.querySelectorAll("#area-50 .ghost");
const fiddyArr = Array.from(fiddy);
console.log(fiddyArr);
fiddyArr.forEach(color);
function color(i) {
  i.style.fill = "red";
}
