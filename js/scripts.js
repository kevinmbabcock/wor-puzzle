$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();

    var string = $("#sentence").val();
    var newString = "";
    for (index = 0; index < string.length; index +=1) {

      if (string.charAt(index) === "a" || string.charAt(index) === "e" || string.charAt(index) === "i" || string.charAt(index) === "o" || string.charAt(index) === "u") {
      newString = newString.concat("-");

      } else {
      newString = newString.concat(string.charAt(index));
    };

    };
    alert(newString);

    $(".display").text(newString);
  })
})
