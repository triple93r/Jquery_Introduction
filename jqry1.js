$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
  $("p").mouseover(function(){
    $(this).css("background-color", "lightgreen");
  });

});
