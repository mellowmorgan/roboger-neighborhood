


function beepBoop(number){

}
  return 


$(document).ready(function(){
  $("form#user").submit(function(event){
    event.preventDefault();
    const input = parseInt($("#input").val());
    $("#output").html(beepBoop(input));
  });
});