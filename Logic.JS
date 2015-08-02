//Names

function allNames(){
  var firstLast = nameArray;
  printName(firstLast);
}
function firstLastNames (index){
  var localNameArray = nameArray;
  var firstOrLast = [];
  for (var i = 0; i < nameArray.length; i++) {
     var nameSplit = localNameArray[i].split(" ");
     firstOrLast.push(nameSplit[index]);
   }
   printName(firstOrLast);
}
