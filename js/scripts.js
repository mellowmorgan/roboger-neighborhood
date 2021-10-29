

function beepBoop(number){
  let numberArray = [];
  for (let i=0;i<number+1;i++){
    numberArray.push(i);
  }
  
  return numberArray;

}

$(document).ready(function(){
  $("form#user").submit(function(event){
    event.preventDefault();
    const input = parseInt($("#input").val());
    $("#output").html(beepBoop(input));
  });
});