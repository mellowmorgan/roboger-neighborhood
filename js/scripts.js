//Business logic

function intFinder(word){
  //returns winning statement or number based on precedence
  word=word.toString();
    let has1=false;
    let has2=false;
    let has3=false;
    for (const character of word){
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
    if(has3){
      word="Won't you be my neighbor?";}
    else if(has2){
      word="Boop!";
    }
    else if(has1){
      word="Beep!";
    }
    else{
      word=parseInt(word);
    }
  return word;
}

function beepBoop(number){
  let numberArray = [];
  for (let i=0;i<number+1;i++){
    numberArray.push(i);
  }
  const newArray = numberArray.map(function(element){
    return intFinder(element);
  });

  return newArray;

}


//UI Logic

let lengthLast=0;

function deleteLast(length){
  for(const i=0;i<length;i++){
    $("#output").
  }
}

function displayResults(input){
  const arr = beepBoop(input);
  arr.forEach(function(element){
    $("#output").append("<p>"+element+"</p>");
  });
  lengthLast = arr.length;
}



$(document).ready(function(){
  $("form#user").submit(function(event){
    event.preventDefault();
    const input = parseInt($("#input").val());
    deleteLast(lengthLast);
    displayResults(input);
    
  });
});