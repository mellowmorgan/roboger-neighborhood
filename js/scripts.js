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

function addNameToResults(array, name){
  const newArray = array.map(function(element){
    if (element==="Won't you be my neighbor?"){
      element="Won't you be my neighbor, " + name +"?"
    }
    return element;
  });
  return newArray;

}


//UI Logic


function displayResults(input, name){  
  let arr = beepBoop(input);
  if(name){arr = addNameToResults(arr,name);}
  $("#output").text(arr.join(", "));
    //next add delay fade in?
}

$(document).ready(function(){
  $('#form-2-link').on('click', function(event) {
    $("#form-1").hide();
    $("#form-2").show();
    $("#form-2-link").addClass("active");
    $("#form-1-link").removeClass("active");
    $("#input").val("");
    $("#output").empty();
  });
  $('#form-1-link').on('click', function(event) {
    $("#form-2").hide();
    $("#form-1").show();
    $("#form-1-link").addClass("active");
    $("#form-2-link").removeClass("active");
    $("#input-2").val("");
    $("#name").val("");
    $("#output").empty();
    
  });

  $("form#no-name-form").submit(function(event){
    event.preventDefault();
    const input = parseInt($("#input").val());
    displayResults(input);
    $('html, body').animate({
      scrollTop: $(".result-row").offset().top
  }, 600);
  });

  $("form#name-form").submit(function(event){
    event.preventDefault();
    const input = parseInt($("#input-2").val());
    const name = $("#name").val();
    displayResults(input, name);  
    $('html, body').animate({
      scrollTop: $(".result-row").offset().top
  }, 600);
  });
});