$(document).ready(function() {
  $("#favorite-form").submit(function(event) {
    event.preventDefault();
    const favoriteArray = [$("input#answer1").val(), 
    $("input#answer2").val(),
    $("input#answer3").val(),
    $("input#answer4").val(),
    $("input#answer5").val()];
    console.log(favoriteArray);

    console.log(favoriteArray[0], favoriteArray[1], favoriteArray[2]);
    
    let newArray = [];
    newArray.push(favoriteArray[0]);
    newArray.push(favoriteArray[1]);
    newArray.push(favoriteArray[2]);

    console.log(newArray);
  
    $("#result1").text(newArray[0]);
    $("#result2").text(newArray[1]);
    $("#result3").text(newArray[2]);
  });
});


