function beepBoop(number){
  let numberArray = [];
  for (let i=0;i<number+1;i++){
    numberArray.push(i);
  }
  const newArray = numberArray.map(function(element){
    element=element.toString();
    let has1=false;
    let has2=false;
    let has3=false;
    for (const character of element){
      if (character==="1"){
        has1=true;
      }
      else if (character==="2"){
        has2=true;
      }
      else if (character==="3"){
        has3=true;
      }
    }
    if(has1){element="Beep!";}
    else if(has2){element="Boop!";}
    else if(has3){element="Won't you be my neighbor?";}
  
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