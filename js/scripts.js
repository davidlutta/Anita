function openNav(){
  document.getElementById("mynav").style.width= "100%"
}
function closeNav(){
  document.getElementById("mynav").style.width= "0%"
}
$(document).ready(function(){
  $("#blank form").submit(function(event){
    var email = ["email"];
    email.forEach(function(blank){
      var userInput = $("input#" + email).val();
      alert("Welcome aboard"$("." + email).text(userInput));
    });
    event.preventDefault();
  });
});
