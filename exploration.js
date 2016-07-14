// stringToMorse intakes a string and prints it out in written morse code
function stringToMorse(string) {
  var morse = {
    "a" : "dot dash",
    "b" : "dash dot dot dot",
    "c" : "dash dot dash dot",
    "d" : "dash dot dot",
    "e" : "dot",
    "f" : "dot dot dash dot",
    "g" : "dash dash dot",
    "h" : "dot dot dot dot",
    "i" : "dot dot",
    "j" : "dot dash dash dot",
    "k" : "dash dot dash",
    "l" : "dot dash dot dot",
    "m" : "dash dash",
    "n" : "dash dot",
    "o" : "dash dash dash",
    "p" : "dot dash dash dot",
    "q" : "dash dash dot dash",
    "r" : "dot dash dot",
    "s" : "dot dot dot",
    "t" : "dash",
    "u" : "dot dot dash",
    "v" : "dot dot dot dash",
    "w" : "dot dash dash",
    "x" : "dash dot dash dash",
    "y" : "dash dot dash dash",
    "z" : "dash dash dot dot",
  }
  var i = 0
  while(i < string.length) {
    var char = string.charAt(i);
    var writtenMorse = morse[char];
    console.log(writtenMorse);
    i++;
  }
}

// find the longest string length in an array of strings
function longestLength(ls) {
  var maxLengthSoFar = 0;
  for(var i = 0; i < ls.length; i++) {
    //walk through array and find the longest so far
    if(maxLengthSoFar < ls[i].length) {
      maxLengthSoFar = ls[i].length;
    }
  }
  return maxLengthSoFar;
}
// regBox takes a list of string and prints them into a nice box
var boxWords = ["dry", "canal", "barely", "accent", "spanish"];
function regBox(ls) {
  var maxlength = longestLength(ls);

  //print top border
  var lineToPrint = "-".repeat(maxlength+4);
  console.log(lineToPrint);

  //move through the array and print every element
  for(var i = 0; i < ls.length; i++) {
    var boxLineToPrint = "| " + ls[i] + " ".repeat(maxlength + 1 - ls[i].length)
    + "|";
    console.log(boxLineToPrint);
  }

  //print bottom border
  console.log(lineToPrint);
}

//every number doubles, inputting the number give you the amount on that number
function square(boxNumber) {
  var board = [1, 2]
  for(var i = 0; i < 62; i++) {
    var square =
    board.push[]
  }

}
