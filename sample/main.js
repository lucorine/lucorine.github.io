// Paste the helpful function here:

// Now use the function to add elements to the list!
function addListElements(text) {
  //select all ul items and add this
  $('ul').append("<li>" + text + "</li>");
  //select all ul items and detach it
  $('ul').detach();
}
