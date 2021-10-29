

function beepBoop(number){
  let numberArray = [];
  for (let i=0;i<number+1;i++){
    numberArray.push(i);
  }
  const newArray = numberArray.map(function(element){
    if(element===1){element="Beep!";}
    else if(element===2){element="Boop!";}
    else if(element===3){element="Won't you be my neighbor?";}
    return element
  });

  return newArray;

}

$(document).ready(function(){
  $("form#user").submit(function(event){
    event.preventDefault();
    const input = parseInt($("#input").val());
    $("#output").html(beepBoop(input));
  });
});