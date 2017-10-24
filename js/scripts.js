$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();

    var inputString = $("#sentence").val();
    var strings = inputString.split("");


    for (index = 0; index < strings.length; index +=1) {
      if (strings[index] === "a" || strings[index] === "e" || strings[index] === "i" || strings[index] === "o" || strings[index] === "u") {
        strings[index] = "-";
      }
    }
    var newString = "";
    for (index = 0; index < strings.length; index+=1) {
      var newString = newString + strings[index];
    }

    $(".display").text(newString);
  })
})
