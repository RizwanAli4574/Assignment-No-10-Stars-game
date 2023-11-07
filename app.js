document.write("<center>")
var n = 10; 
for (var i = 1; i <= n; i++) { 
    var str = "* "; 
    document.write(str.repeat(i) + "<br>"); 
}
document.write("<center>")
document.write("<br>")


document.write("</center>")
var n = 1; 
for (var i = 10; i >= n; i--) { 
    var str = "* "; 
    document.write(str.repeat(i) + "<br>"); 
}
document.write("</center>")
document.write("<br>")
document.write("<br>")


var n = 5; 
for (var i = 1; i <= n; i++) { 
    var str = "* "; 
    document.write(str.repeat(i) + "<br>"); 
}

document.write("<br>")


var n = 1; 
for (var i = 5; i >= n; i--) { 
    var str = "* "; 
    document.write(str.repeat(i) + "<br>"); 
}

document.write("<br>")
document.write("<br>")

for(var i=5;i>=1;i--) {
    for(var j=i;j>=1;j--){
        document.write(j);
    }
        document.write("<br>");
}

document.write("<br>")
document.write("<br>")

for(var i=1;i<=5;i++) {
    for(var j=1;j<=i;j++){
        document.write(j);
    }
        document.write("<br>");
}

document.write("<br>")

for(var i=5;i>=1;i--) {
    for(var j=i;j>=1;j--){
        document.write(i);
    }
        document.write("<br>");
}

document.write("<br>")


var n = 5; // you can take input from prompt or change the value
var string1 = "";
// External loop
for (var i = 1; i <= n; i++) {
  // printing characters
  for (var j = 0; j < i; j++) {
    string1 += String.fromCharCode(j + 65);
  }
  string1 += "<br>";
}
document.write(string1)

document.write("<br>")


var n = 1; // You can change the value of n
var string2 = "";

// External loop
for (var i = 5; i >= n; i--) {
  // Printing characters
  for (var j = 0; j <= i - 1; j++) {
    string2 += String.fromCharCode(j + 65);
  }
  string2 += "<br>";
}

document.write(string2);

document.write("<br>")

var n = 5; // you can take input using prompt or change the value
var string = "";
var count = 0;
// External loop
for (var i = 1; i <= n; i++) {
  for (var j = 0; j < i; j++) {
    string += String.fromCharCode(count + 65);
    count++; // increment cause next alphabet
  }
  string += "<br>";
}
document.write(string);

document.write("<br>")

var n = 1; // You can change the value of n
var string = "";
var count = 14; // Start from 'A' (ASCII 65)

// External loop
for (var i = 5; i >= n; i--) {
  // Printing characters
  for (var j = 0; j < i; j++) {
    string += String.fromCharCode(count + 65); // Convert ASCII to character
    count--; // Decrement to the previous alphabet
  }
  string += "<br>";
}

document.write(string);

document.write("<br>")


