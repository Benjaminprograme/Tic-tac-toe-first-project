// Gameplay
// Block Data
var Table = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

function ClearData() {
  var Symbols = document.getElementsByClassName("Symbol");
  for (var i = 0; i < Symbols.length; i++) {
    if (Symbols[i]) {
      Symbols[i].innerHTML = "";
      Table = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    }
  }
}

// Player turns
var Playing = "X";

// Win draw logic
function CheckForWin() {
  // Other combos
  if (Table[0] == Table[1] && Table[1] == Table[2]) {
    ClearData();
    if (Table[0] == "X") {
      alert("The winner is X");
    } else {
      alert("The winner is O");
    }
  }
  if (Table[0] == Table[3] && Table[3] == Table[6]) {
    ClearData();
    if (Table[0] == "X") {
      alert("The winner is X");
    } else {
      alert("The winner is O");
    }
  }
  if (Table[2] == Table[5] && Table[5] == Table[8]) {
    ClearData();
    if (Table[2] == "X") {
      alert("The winner is X");
    } else {
      alert("The winner is O");
    }
  }
  if (Table[6] == Table[7] && Table[7] == Table[8]) {
    ClearData();
    if (Table[6] == "X") {
      alert("The winner is X");
    } else {
      alert("The winner is O");
    }
  }

  // All the combos that contain 4
  if (Table[4] != null) {
    if (Table[0] == Table[8] && Table[8] == Table[4]) {
      ClearData();
      if (Table[4] == "X") {
        alert("The winner is X");
      } else {
        alert("The winner is O");
      }
    }
    if (Table[1] == Table[7] && Table[7] == Table[4]) {
      ClearData();
      if (Table[4] == "X") {
        alert("The winner is X");
      } else {
        alert("The winner is O");
      }
    }
    if (Table[2] == Table[6] && Table[6] == Table[4]) {
      ClearData();
      if (Table[4] == "X") {
        alert("The winner is X");
      } else {
        alert("The winner is O");
      }
    }
    if (Table[3] == Table[5] && Table[5] == Table[4]) {
      ClearData();
      if (Table[4] == "X") {
        alert("The winner is X");
      } else {
        alert("The winner is O");
      }
    }
  }
  // Draw
}

// Game
function SybolPl(id) {
  if (Table[id - 1] !== "X" && Table[id - 1] !== "O") {
    var Block = document.getElementById(id);
    Table[id - 1] = Playing;
    Block.innerHTML = Playing;
    if (Playing == "X") {
      Playing = "O";
    } else {
      Playing = "X";
    }
  }
  console.log(Table); // Testing
  CheckForWin();
}
