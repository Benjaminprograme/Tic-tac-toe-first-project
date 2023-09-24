
//Gameplay
//Block Data
var Table=[];

//Player turns
var Playing="X"
//Placment
function SybolPl(id){
    if(Table[id-1]==null){
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
}

