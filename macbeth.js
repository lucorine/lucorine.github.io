console.log("And all our yesterdays are lighted fools");
console.log("The way to dusty death");

var chicken = "Kentucky Fried Chicken";
var sushi = "Wherefore art thou?";

console.log(sushi + chicken);

function goGetLunch(name) {
  alert("It's Lunch Time");
  alert("Let's go, " + name);
}

//goGetLunch("Cucumber Sharks!");
//goGetLunch(chicken);

// item1,2,&3 are the cost in dollars. Coupon is the decimal you have to pay
function checkout(item1, item2, item3, coupon) {
  return item1 + item2 + (item3 * coupon);
}

var totalCost = checkout(1, 1.5, 8, .9);
console.log("My total cost is " + totalCost);

function timesTwo(x) {
  return (x * 2);
}

var y = timesTwo(6);
console.log(y);

function timesSix(q) {
  return (3 * q);
}

var b =  timesSix(y)
console.log(b);

function timesn(m, n) {
  return (m * n)/2;
}

var p = timesn(y, 4);
console.log(p);

// a better way is just to put timeTwo(x) in timesSix and x*n in timesn

//ELEPHANTBEARMOUSECOW make mouse lowercase
//assign variables and string

var animal = "ELEPHANTBEARMOUSECOW";
animal = animal.substring(0,12) + animal.substring(12,17).toLowerCase() + animal.substring(17, 20);

function tigerMom(gpa) {
  if(gpa > 4.0 || gpa < 0) {
    return "Error!"
  } else if(gpa == 4.0) {
    return "You did well";
  } else if(gpa < 4.0 && gpa > 3.5) {
    return "Try harder";
  } else {
    return "Better not sleep";
  }
}

function skeet(score) {
  if(score >= 450) {
    return "Inconceivable!";
  } else if(score >= 350 && score < 450) {
    return "Great!";
  } else if(score < 350 && score >= 250) {
    return "Good!";
  } else if(score < 250 && score >= 150) {
    return "Decent!";
  } else {
    return "Pretty Bad";
  }
}

function fb(x) {
  if(x%3 == 0 && x%5 == 0) {
    return "fizzbuzz";
  } else if(x%3 == 0) {
    return "fizz";
  } else if(x%5 == 0) {
    return "buzz"
  } else {
    return x
  }
}

function reverse(string) {
  var char = string.length;
  var mid = char/2;
  var ogMidChar = string.charAt(mid);
  var midChar = string.charAt(mid).toUpperCase();
  if(midChar == ogMidChar) {
    midChar = string.charAt(mid).toLowerCase();
  } else {
    midChar = string.charAt(mid).toUpperCase()
  }
  return string.substring(0, mid) + midChar + string.substring(mid+1, 100);
}

var words = ["hi", "bye", "okay", "here"];
var ten = ["ten", "eleven", "twelve"];

function chopFlip(array) {
  var totalArray = (array.length);
  var array2 = array;
  var array3 = array;
  array2 = array2.splice(Math.ceil(totalArray/2));
  array3 = array3.splice(!totalArray);
  return array2.concat(array3);
}

var numbers = [2, 3, 5, 7, 11, 13, 17, 23];
//var i = 0;
//while(i < numbers.length) {
  //console.log("The number is " + numbers[i]);
  //numbers[i] = numbers[i] + 1;
  //i = i+1;
//}
//for(var i = 0; i < numbers.length; i++) {
  //numbers[i] = numbers[i] + 2;
//}

var okay = ["Game of Thrones", "Grey's Anatomy", "Jessica Jones", "Scrubs", "Gilmore Girls"]

/*function myFavorites(x) {
  var i = 0;
  while(i < okay.length) {
  //numbers[i] = numbers[i]*2;
  //alert(numbers[i]);
    if(okay[i] == x) {
      return x + "? That's my favorite, too!";
    } else {
      i = i+1;
    }
  }
} */

function myFavorites(x) {
  for(var i = 0; i < okay.length; i++) {
  //numbers[i] = numbers[i]*2;
  //alert(numbers[i]);
    if(okay[i] == x) {
      return x + "? That's my favorite, too!";
    }
  }
}

// reverse takes an array and returns another array in reverse order
function reverseAgain(x) {
  var result = []
  for(var i = x.length-1; i >= 0; i--) {
    result.push(x[i]);
  }
  return result;
}

var fruitColors = {
  "apple" : "red",
  "tangerines" : "orange",
  "watermelon" : "green"
}
