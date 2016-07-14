function showWhenClicked() {
    $("#pig").show();
}

function hideWhenClicked() {
    $("#pig").hide();
}

function flyWhenClicked() {
    $("#pig").animate({marginLeft: 500, width: 10}, "slow");
    $("#pig").fadeOut();
}

function setup() {
    $("#showPig").click(showWhenClicked);
    $("#hidePig").click(hideWhenClicked);
    $("#flyPig").click(flyWhenClicked);
}

$(document).ready(setup);
