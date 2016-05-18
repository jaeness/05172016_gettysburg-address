$(document).ready(function() {

  //show initially with CSS on the container and then have a timer on it.

  $("#container").fadeIn(8000);

  $(document).on("mouseenter", "p", function(){
    $(this).css("background-color", "yellow");
  });

  $(document).on("mouseleave", "p", function(){
    $(this).css("background-color", "white");
  });

  $(document).on("click", "h2", function(){
    $(this).fadeTo( "slow" , 0.5);
    $(this).

    $("h2").on("click", function() {
        $(this).animate({
            "opacity": "0.25",
            "margin-left": "20px"
        }, 400, "swing", function() {
            $(".speech").animate({
                "opacity": "0.5"
            });
        });
    });

});

});
