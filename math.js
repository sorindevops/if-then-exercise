// declare program variables

// announce the program
alert("Let's do some math!");

// collect numeric input
var num1 = prompt("Please type a number");
num1 = parseFloat(num1);
var num2 = prompt("Please type another number");
num2 = parseFloat(num2);

// build an HTML message
var message = "<h1>Math with the numbers " + num1 + " and " + num2 + "</h1>";
message += num1 + " + " + num2 + " = " + (num1 + num2);
message += "<br>";
message += num1 + " * " + num2 + " = " + (num1 * num2);
message += "<br>";
message += num1 + " / " + num2 + " = " + (num1 / num2);
message += "<br>";
message += num1 + " - " + num2 + " = " + (num1 - num2);

//alert 
if (num2 == 0) {
    alert("The second number is 0, you can't divide by Zero. Please reload and try again")
} else if (typeof num1  && num2 == "") {
    alert("One or more entries is not a number")
}

// write message to web page
document.write(message);

