//Starting the rounde
function Start(){
  document.getElementById("board").style.visibility="visible";
  document.getElementById("startButton").style.visibility="hidden";
 }
//Gameplay
//Block Data
let Table = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function ClearData() {
  let Symbols = document.getElementsByClassName("Symbol");
  for (let i = 0; i < Symbols.length; i++) {
    if (Symbols[i]) {
     Table = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      Symbols[i].innerHTML = "";
      document.getElementById("board").style.visibility="hidden"
      document.getElementById("startButton").style.visibility="visible";
      timesPlayed=0;
      Win=0;
  }
  }
  }
//Player turns
let activePlayer = "X";
let timesPlayed=0;
//Win draw logic
var Win=0;
function CheckSymbols(x,y,z){
  if(Table[x]==Table[y] && Table[y]==Table[z]){
   Win=1;
  alert("The winner is "+ activePlayer)
ClearData();
  }
}
function CheckForDraw(){
  if(timesPlayed==9 && Win!=1){
  alert("Draw");
 ClearData();
 }
  }
function CheckForWin() {
//Other combos
CheckSymbols(0,1,2);
CheckSymbols(0,3,6);
CheckSymbols(2,5,8);
CheckSymbols(6,7,8);
//All the combos that contain 4
if(Table[4]!=null){
  CheckSymbols(0,8,4);
  CheckSymbols(1,7,4);
  CheckSymbols(2,6,4);
  CheckSymbols(3,5,4);
  //Draw
  CheckForDraw();
    }
 }
//Gameplay logic
function SymbolPlace(id) {
if (Table[id - 1] !== "X" && Table[id - 1] !== "O") {
  let Block = document.getElementById(id);
  Block.innerHTML = activePlayer;
  Table[id - 1] = activePlayer;
  timesPlayed+=1;
  CheckForWin();
  if (activePlayer == "X") {
    activePlayer = "O";
  } else {
    activePlayer = "X";
  }
}
}
