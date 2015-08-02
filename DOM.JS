var currentPage = document.location.pathname.split('/');
currentPage = currentPage[currentPage.length-1];

if(currentPage === 'index.html'){
  //Index page divs
  var answerDiv = document.getElementById('answer');
  var options = document.getElementsByName('prices')[0];

  // Gets the sum-all button from DOM and adds a click listener
  var sumAllButton = document.getElementById('sum-all');
  sumAllButton.addEventListener("click",function(event){
    var total = sum(options);
    answerDiv.innerHTML = "$"+total;
  });

  // Gets the count selected button from DOM and adds a click listener
  var countSelectedButton = document.getElementById('count-selected');
  countSelectedButton.addEventListener("click",function(event){
    var numSelected = countSelected(options);
    answerDiv.innerHTML = numSelected;
  });

  // Gets the sum selected button from DOM and adds a click listener
  var sumSelectedButton = document.getElementById('sum-selected');
  sumSelectedButton.addEventListener("click",function(event){
    var sum = sumSelected(options)
    answerDiv.innerHTML = "$"+sum;
  });

  // gets the average-all button and adds a click listener
  var averageAllButton = document.getElementById('average-all');
  averageAllButton.addEventListener("click",function(event){
    var avg = averageAll(options);
    answerDiv.innerHTML = "$"+avg;
  });

  // gets the average-selected button and adds a click listener
  var averageSelectedButton = document.getElementById('average-selected');
  averageSelectedButton.addEventListener("click",function(event){
    var avg = averageSelected(options);
    answerDiv.innerHTML = "$"+avg;
  });
}

if(currentPage === 'names.html'){
  // names.html divs
  var names = document.getElementsByName('names')[0].value;
  var answerUL = document.getElementById('answerUL');

  //gets the all-names button and adds a click listener
  var allNamesButton = document.getElementById('all-names');
  allNamesButton.addEventListener('click',function(event){
    var nameList = namesList(names);
    displayToLi(nameList);
  });

  var firstNamesButton = document.getElementById('first-names');
  firstNamesButton.addEventListener('click',function(event){
    var firstNameList = firstNames(names);
    displayToLi(firstNameList);
  });

  var lastNamesButton = document.getElementById('last-names');
  lastNamesButton.addEventListener('click',function(event){
    var lastNameList = lastNames(names);
    displayToLi(lastNameList);
  });

  var nameLengthsButton = document.getElementById('names-with-lengths');
  nameLengthsButton.addEventListener('click',function(event){
    var nameLengthList = nameLength(names);
    displayToLi(nameLengthList);
  });

  function displayToLi(list){
    answerUL.innerHTML = '';
    for (var i=0;i<list.length;i++){
      var li = document.createElement('li');
      li.innerHTML = list[i];
      answerUL.appendChild(li);
    }
  }
}
