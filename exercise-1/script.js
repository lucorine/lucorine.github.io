/* You will save your code during today's demos and exercises here. */
function updateFrame() {
  $("#android img").fadeOut(1500);
  var pizza = $("#string h5").detach();
  $("#PEP")
    .append(pizza)
    .children("b")
    .addClass("newColor");
}

function renewFrame() {
  $("#android img").fadeIn(1500);
}

function setupHandlers() {
  var myObj = {
    foo: "bar"
  };
 $("img").on("mouseenter", function() {
    //$(this).animate({width: 200}, 2000).fadeOut();
    $(this).slideUp();
  });

$("img").on("mouseleave", function() {
  $(this).animate({width: 50}, 2000).fadeIn();
});
  $(document).keypress(function() {
    console.log("key press");
  })
  $("button").click(function() {
    $("img").animate({width: 200 }, 2000);
  });
}

function getPosition() {
  var position = $("img").position();
  console.log(position);
//  var isReaction = false;
//  var reactionTime;

/*  $("#PEP").click(function () {
    console.log("click");
    var d = new Date();

    if(!isReaction) {
      isReaction = true;
      reactionTime = d.getTime();
    } else {
      var endTime = d.getTime();
      console.log(endTime - reactionTime);
      isReaction = false
    }
  }) */
}

$(document).ready(setupHandlers);
