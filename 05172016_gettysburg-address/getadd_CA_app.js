$(document).ready(function(){

//1
  $("body").fadeIn(4000);

//2 (select the paragraph, then an event of mouseenter or mouseleave then add the background-color.  .css in the app.js is appending a style attribute to to your HTML element)
  $("p").on("mouseenter", function(){
    $(this).css("background-color", "yellow");
  });

  $("p").on("mouseleave", function(){
    $(this).css("background-color", "white");
  });

//3

  $("h2").on("mouseleave", function() {
    $(this).animate({
      "opacity":"0.25",
      "margin-left":"20px",
    }, 400, "swing", function(){
      $(".speech").animate({
        "opacity": "0.5"
      });
    });
  });

  $("h2").on("click", function() {
    $(this).animate({
      "opacity": "0.25",
      "margin-left": "20px"
    }, 400, "swing", function () {
      $(".speech").animate({
          "opacity": "0.5"
        });
    });
});

//4


//5


});
