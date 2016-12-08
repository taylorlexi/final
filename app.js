$(document).ready(function() {
  
  $("#submit").on("click", function() {
    var input = $("#attendNewSchool").val();
    console.log(input)
    var answerQuestion = parseInt(input);

    if (answerQuestion == "yes") {
      var answerText = "You can write for NSFP";
    } else {
      var answerText = "No you can't write for NSFP!";
    }

    $("#answer").text(answerText);
  
  });
});
