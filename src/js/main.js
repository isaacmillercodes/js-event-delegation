// ** globals ** //

var seedData = [
  'Sing happy birthday',
  'Wash the car',
  'Watch the Avalanche win',
  'Look at Wes'
];

// ** dom manipulation ** //

$(document).on('ready', function() {
  seedData.forEach(function(seed) {
    addToDoToDom(seed);
  })
});

$('form').on('submit', function(e) {
  e.preventDefault();

  var $newToDo = $('#todoInput');

  addToDoToDom($newToDo.val())

  $newToDo.val('');
})

// ** helper functions ** //

function addToDoToDom(seed) {
  $('#all-todos').append('<li>' + seed + '</li>')
}

$('ol').on('click', 'li', function() {
  console.log('hey buddy this works');
  $(this).remove();
})
