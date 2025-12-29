// Qustion No 1 

var productName = "Laptop";
var price = 999.99;
var inStock = true;

console.log(productName, price, inStock);

// Qustion No 2

console.log(27%4);
console.log(12**2);
var a = 8;
a++;
console.log(a);
var b = 15;
b -= 2;
console.log(b);

// Qustion No 3

var firstName = "alex";
var lastName = "SMITH";
var fullName = firstName + " " + lastName;
var properName = fullName
  .toLowerCase()
  .replace(/\b\w/g, char => char.toUpperCase());
var totalLength = properName.length;

console.log(properName);    
console.log(totalLength);   

// Qustion No 4

var temperature = 25;

if (temperature > 30) {
  console.log("Hot day");

} else if (temperature >= 20 && temperature <= 30) {
  console.log("Pleasant day");

} else {
  console.log("Cold day");
}

// Qustion No 5

console.log(15 === "15"); 
console.log(20 > 15 && 20 < 25); 
console.log(10 !== 10 || 5 > 3); 

// Qustion No 6

var colors = ["red", "green", "blue"];

colors.push("yellow");

colors.shift();

colors.splice(1, 0, "purple");

console.log(colors);
console.log(colors.length);

// Qustion No 7

var fruits = ["apple", "banana", "cherry", "date", "elderberry"];

fruits.splice(2, 1);
fruits.splice(2, 1, "dragonfruit");

var startIndex = Math.floor((fruits.length - 3) / 2);
var middleFruits = fruits.splice(startIndex, 3);

console.log("Remaining fruits:", fruits);
console.log("Middle fruits:", middleFruits);

// Qustion No 8

var sum = 0;

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }

  if (i === 8) {
    break;
  }

  console.log(i);
  sum += i;
}

console.log("Sum:", sum);

// Qustion No 9

for (var i = 1; i <= 5; i++) {
  var row = "";

  for (var j = 1; j <= i; j++) {
    row += "*";
  }

  console.log(row);
}

// Qustion No 10

var text = "The quick brown fox jumps over the lazy dog";
var foxPosition = text.indexOf("fox");
var brownFox = text.slice(
  text.indexOf("brown"),
  text.indexOf("fox") + "fox".length
);

var hasDog = text.includes("dog");
var charAt10 = text.charAt(10);

console.log("Position of fox:", foxPosition);
console.log("Extracted text:", brownFox);
console.log("Contains dog:", hasDog);
console.log("Character at position 10:", charAt10);

// Qustion No 11

var sentence = "I love JavaScript and JavaScript is awesome";
var firstReplace = sentence.replace("JavaScript", "coding");
var allReplace = sentence.replace(/JavaScript/g, "JS");
var awesomeReplace = sentence.replace("awesome", "AWESOME");

console.log(firstReplace);
console.log(allReplace);
console.log(awesomeReplace);

// Qustion No 12

var num = 123.456789;
var round2 = Number(num.toFixed(2));
var nearestInt = Math.round(num);
var floorVal = Math.floor(num);
var ceilVal = Math.ceil(num);
var fourDecimals = num.toFixed(4);

console.log(round2);      
console.log(nearestInt);  
console.log(floorVal);   
console.log(ceilVal);    
console.log(fourDecimals); 

// Qustion No 13

var randomInt1to100 = Math.floor(Math.random() * 100) + 1;

var randomDecimal = Math.random().toFixed(3);

var random50to75 = Math.floor(Math.random() * (75 - 50 + 1)) + 50;

console.log(randomInt1to100);
console.log(randomDecimal);
console.log(random50to75);

// Qustion No 14

var num1 = Number("123");
var num2 = parseFloat("45.67");
var strNum = String(789);
var boolVal = Boolean("true");
var boolType = typeof boolVal;

console.log(num1, typeof num1);    
console.log(num2, typeof num2);    
console.log(strNum, typeof strNum);
console.log(boolVal, boolType);     

// Qustion No 15

var now = new Date();
var year = now.getFullYear();
var month = now.getMonth(); 
var day = now.getDate();
var hours = now.getHours();
var formattedDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
var christmas2024 = new Date(2024, 11, 25); 

console.log("Year:", year);
console.log("Month (0-11):", month);
console.log("Day:", day);
console.log("Hours (24h):", hours);
console.log("Formatted date:", formattedDate);
console.log("Christmas 2024:", christmas2024);

// Qustion No 16

function calculate(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (b === 0) {
        return "Error: Division by zero";
      }
      return a / b;
    default:
      return "Error: Invalid operator";
  }
}

console.log(calculate(5, 3, '+')); 
console.log(calculate(10, 0, '/')); 
console.log(calculate(6, 2, '*')); 
console.log(calculate(9, 4, '-')); 
console.log(calculate(7, 2, '^'));

// Qustion No 17

var globalCounter =0;

function incrementCounter() {

var globalCounter =0;

  globalCounter++;

  window.globalCounter = window.globalCounter + 1 || globalCounter + 1;

  console.log("Local counter:", globalCounter);
  console.log("Global counter:", globalCounterGlobal());
}

function globalCounterGlobal() {
  return globalCounter;
}

incrementCounter();
incrementCounter();

console.log("Final global counter:", globalCounter);

// Qustion No 18

function getDayName(dayNumber) {
var dayName;

  switch (dayNumber) {
    case 0:
      dayName = "Sunday";
      break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    default:
      dayName = "Invalid day number";
  }

  return dayName;
}

console.log(getDayName(0)); 
console.log(getDayName(3)); 
console.log(getDayName(6)); 
console.log(getDayName(10));

// Qustion No 19

var count = 10;
while (count >= 1) {
  console.log(count);
  count--;
}
console.log("Blast off!");

var n = 5;
var factorial = 1;
var i = 1;

while (i <= n) {
  factorial *= i;
  i++;
}

console.log("Factorial of 5:", factorial);

// Qustion No 20

var enteredPassword = "";
var attempts = 0;
const maxAttempts = 5;
const correctPassword = "secret123";

do {
  attempts++;
  
  if (attempts === 3) {
    enteredPassword = "secret123"; 
  } else {
    enteredPassword = "wrongPassword";
  }

  console.log(`Attempt ${attempts}: entered "${enteredPassword}"`);

} while (enteredPassword !== correctPassword && attempts < maxAttempts);

if (enteredPassword === correctPassword) {
  console.log("Access granted!");
} else {
  console.log("Access denied: too many attempts");
}

// Qustion No 21

var numbers = [12, 45, 78, 23, 56, 89, 34];

var max = numbers[0];
var sum = 0;
var greaterThan50 = [];
var reversed = [];

for (var i = 0; i < numbers.length; i++) {

  if (numbers[i] > max) {
    max = numbers[i];
  }

  sum += numbers[i];

  if (numbers[i] > 50) {
    greaterThan50.push(numbers[i]);
  }
}

for (var i = numbers.length - 1; i >= 0; i--) {
  reversed.push(numbers[i]);
}

var average = sum / numbers.length;

console.log("Max:", max);
console.log("Average:", average);
console.log("Greater than 50:", greaterThan50);
console.log("Reversed:", reversed);

// Qustion No 22

function handleClick() {
 
  var username = document.getElementById("username").value;

  if (username === "") {
    alert("Please enter your username");
  } else {

    document.getElementById("greeting").textContent =
      "Welcome, " + username + "!";

    document.getElementById("username").value = "";
  }
}

// Qustion No 23

function validateForm(email, password) {
  if (!email.includes("@")) {
    return "Error: Email must contain @";
  }

  if (password.length < 8) {
    return "Error: Password must be at least 8 characters long";
  }

  return true;
}
console.log(validateForm("userexample.com", "password123"));
console.log(validateForm("user@example.com", "pass"));
console.log(validateForm("user@example.com", "password123"));
console.log(validateForm("", ""));

// Qustion No 24

function convertTemperature(temp, unit) {

  var result;

  if (unit === "C") {

    result = (temp * 9 / 5) + 32;

  } else if (unit === "F") {
 
    result = (temp - 32) * 5 / 9;

  } else {
    return "Invalid unit. Use 'C' or 'F'.";
  }

  return result.toFixed(1);
}
console.log(convertTemperature(0, "C"));   
console.log(convertTemperature(100, "C")); 
console.log(convertTemperature(32, "F")); 
console.log(convertTemperature(98.6, "F"));

// Qustion No 25

var cart = [];

function addItem(name, price) {
  cart.push({ name: name, price: price });
}

function removeItem(name) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      cart.splice(i, 1);
      break;
    }
  }
}

function calculateTotal() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].price;
  }
  return total;
}

function applyDiscount(percent) {
  var total = calculateTotal();
  var discount = total * (percent / 100);
  return total - discount;
}

function listItems() {
  var names = [];
  for (var i = 0; i < cart.length; i++) {
    names.push(cart[i].name);
  }
  return names;
}
addItem("Book", 300);
addItem("Pen", 50);
addItem("Bag", 1200);

console.log(cart);
console.log(calculateTotal()); 
console.log(applyDiscount(10)); 
console.log(listItems()); 

removeItem("Pen");

console.log(cart);
