//Names
var nameArray = document.getElementsByName('names')[0].innerHTML.split('\n');

var allNamesClick = document.getElementById('all-names');
var firstNamesClick = document.getElementById('first-names');
var lastNamesClick = document.getElementById('last-names');
var namesWithLengthClick = document.getElementById('names-with-lengths');

allNamesClick.onclick = function(){allNames();};
firstNamesClick.onclick = function(){firstLastNames(0);};
lastNamesClick.onclick = function(){firstLastNames(1);};
namesWithLengthClick.onclick = function(){namesWithLength();};

function printName(valueArr, lengthArr){
  var list = document.getElementById('out');
  list.innerHTML = null;
  for (var i = 0; i < valueArr.length; i++) {
    var listItem = document.createElement('li');
    listItem.innerHTML = valueArr[i] + " " + lengthArr[i];
    list.appendChild(listItem);
  }
}
