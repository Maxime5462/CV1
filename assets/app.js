$( document ).ready(function() {
  console.log( "ready!" );
  $("#bouton").click(function(){
    $(this).css("color","red");
  })
  $("p").click(function(){
    $(this).css("color","green");
  })
});
