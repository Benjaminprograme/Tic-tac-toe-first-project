
  
//Gameplay
//Block Data
var Table=[1,2,3,4,5,6,7,8,9];


//Player turns
var Playing="X"
//Win draw logic
function CheckForWin(){
  
    if(Table[0]!="1"){
       if(Table[4]==Table[8]) {
        Table=[1,2,3,4,5,6,7,8,9];
        Playing="X"
       
       }
    }
}
//Placment
function SybolPl(id){
    if(Table[id-1]!=="X" && Table[id-1]!=="O" ){
    var Block=document.getElementById(id);
    Table[id-1]=Playing;
    Block.innerHTML=Playing;
    if (Playing=="X"){
       
        Playing="O";
    }
    else{
        Playing="X";
    }
 
  
  
}

console.log(Table);
CheckForWin()
}






