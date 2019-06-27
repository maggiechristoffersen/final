var cardContainer = $('.card-container');
var submit = $('.submit-btn');

submit.on("click", addToToDoList);

function addToToDoList() {
  var needToDo = $('.name').val();

cardContainer.append (`
<p class="needToDo"><input type="checkbox" class="checkbox"> I need to ${needToDo}
`);

var checkbox = $('.checkbox');
checkbox.on("click", remove)

function remove(){
  event.target.parentNode.remove();
}
$('.name').val("");
}

var button = $('.submit');
var howLong = $('.how-long')

button.on ("click",studyTime);

function studyTime() {
  event.preventDefault();
  var chapters = $('.chapters').val();
  var comfort = $('.comfortable').val();
  var weeks = $('.weeks').val();
  var sum = ((chapters*5)+(comfort*5)+(weeks*5));
  howLong.append(`<p>You should study for ${sum} minutes!</p>`);
  }