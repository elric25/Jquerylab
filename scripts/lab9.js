$(document).ready(function( ) {
  $("h1").text("Lab 9 Test.") //works

  var step3 = $("<h3>Working with jquery.</h3>")
  $("#header").html(step3) //works

$("input[type = button]").each(function (index, value){
  $(value).addClass("btn-background");
});

$("#buttons").addClass("red-border")

$("p").each(function (index, value){
  $(value).addClass("blue");
});

$("#first").on("click", green);
function green(){
  $("#paragraphs p:first").addClass("green-border");
}

$("#last").on("click", orange);
function orange(){
  $("#paragraphs p:last").addClass("orange-border");
}

$("#next").on("click", yellow);
function yellow(){
  $("#para2").addClass("yellow-border");
}

$("#prev").on("click", purple);
function purple(){
  $("#para3").addClass("purple-border");
}

$("#remove").on("click", remove);
function remove(){
  $("#footer").remove();
}

});
