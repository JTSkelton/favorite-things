$(document).ready(function() {
  $("#favorite-form").submit(function(event) {
    event.preventDefault();
    const favoriteArray = [$("input#answer1").val(), 
    $("input#answer2").val(),
    $("input#answer3").val(),
    $("input#answer4").val(),
    $("input#answer5").val()];
    console.log(favoriteArray);
  });
});


