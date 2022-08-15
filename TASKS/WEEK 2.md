<h1 align="center">Javascript - Week 2</h1>

## Week goal 🏁

## Week challenges (Monday) 💻

1. Follow the github course, you can find it [here](https://www.udacity.com/course/version-control-with-git--ud123)
2. Create an account in Codewars, follow [this instructions](./_create_account_codewars/)
3. Read about: if...else

 `if:` The if statement is used in situations where a certain bit of code only needs to be executed if certain conditions are met. Its syntax is as follows
```javascript
if(condition){
code;
}
```
`if...else:`The else statement is used to specify a block of code that will be executed if the condition of the if statement is false.
Syntax:
```javascript
if(condition){
code to execute if condition is true;
}
else {
code to execute if condition is false;
}
```
`if...else if:`The if...else if is used to check a different condition if the first condition fails. Syntax:
```javascript
if(condition 1){
code block 1;
}
else if(condition 2){
code block 2
}
else {
code block 3;
}
```
4. Read about: for

`for:`
The for loop is used to repeat one or more statements a specified number of times. Of all the loops, the For is used when we know for sure the number of times we want it to be executed. Syntax:
```javascript
for(statement 1; statement 2; statement 3){
block of code to execute;
}
```
`statement 1:`
This statement is executed before loop start (just once)

`statement 2:`
This statement is the conditional check that is executed before each iteration.

`statement 3:`
This statement is executed at the end of each iteration of the loop.

5. Read about: while

`while:`The While Loop Looks for a condition at the beginning of the code block and only executes the code if the condition is true. Syntax:
```javascript
while(condition){
code block;
}
```
6. Read about: functions

`funtion:` A function is a piece of code designed to perform a particular task or to be reused over and over again. Functions help reduce code length and improve code recoverability.

The 'function' declaration is used to define a function, followed by a name for the function, which is then followed by a set of parentheses. syntax:
```javascript
function name(){
code block;
}
```

## Week challenges (Tuesday) 💻

1. Start this [HTML](https://edpuzzle.com/join/vawasaj) course
2. Multiply exercise

`Description`
This code does not execute properly. Try to figure out why.

`Solution`
```javascript
function multiply(a, b){
  return a * b
}
```

3. ASCII Total exercise

`Description`

You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

examples:

uniTotal("a") == 97 uniTotal("aaa") == 291

`Solution`
```javascript
function uniTotal (string) {
  let longitud = string.length;
  let suma= 0;
  for (let i = 0; i<longitud; i++){
    suma = suma + string.charCodeAt(i);
  }
return suma;
}
```

## Week challenges (Wednesday) 💻

 1. Follow up with the [HTML](https://edpuzzle.com/join/vawasaj) course you started on Tuesday
 2. Char From ASCII Value exercise

`Description`

Write a function `get_char()` / `getChar()` which takes a number and returns the corresponding ASCII char for that value.

Example:

`get_char(65)`

should return:

`'A'`

`Solution`
```javascript
function getChar(c){
  return String.fromCharCode(c);
}
```
3. Binary Addition exercise

`Description`
 
 Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

```assembly
1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
``` 
`Solution`
```javascript
function addBinary(a,b) {
  const suma = a + b;
  return suma.toString(2);
}
```
4. Student's Final Grad exercise

`Description`

Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

This function should return a number (final grade). There are four types of final grades:

100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.

90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.

75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.

0, in other cases

Examples(Inputs-->Output):

```
100, 12 --> 100
99, 0 --> 100
10, 15 --> 100

85, 5 --> 90

55, 3 --> 75

55, 0 --> 0
20, 2 --> 0

```
*Use Comparison and Logical Operators.

`Solution`

```javascript
function finalGrade (exam, projects) {
  if(exam > 90 || projects > 10) return 100;
  if(exam > 75 && projects >= 5) return 90;
  if(exam > 50 && projects >= 2) return 75;
   return 0;
}
```

## Week challenges (Thursday) 💻

1. Follow up with the [HTML](https://edpuzzle.com/join/vawasaj) course you started on Tuesday
2. Remove All Exclamation Marks From The End Of Sentence exercise

`Description`

Remove all exclamation marks from the end of sentence.

Examples
```
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
```

`Solution`
```javascript
function remove (string) {  
  return string.replace(/!+$/, "");
}
```
3. Vowel Remover exercise

`Description`

Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
```
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
```
`Solution`
```javascript
function shortcut (string) {
  return string.replace(/[aeiou]/g, "");
}
```

4. Rock Paper Scissors! exercise3

`Description`

Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):
```
"scissors", "paper" --> "Player 1 won!"

"scissors", "rock" --> "Player 2 won!"

"paper", "paper" --> "Draw!"
```
`Solution`
```javascript
const rps = (p1, p2) => {
 if(p1 === "scissors" && p2 === "paper") {
 return "Player 1 won!"
 }
 if(p1 === "paper" && p2 === "rock") {
 return "Player 1 won!"
 }
 if(p1 === "rock" && p2 === "scissors" ) {
 return "Player 1 won!"
 }
 if(p2 === "scissors" && p1 === "paper") {
 return "Player 2 won!"
 }
 if(p2 === "paper" && p1 === "rock") {
 return "Player 2 won!"
 }
 if(p2 === "rock" && p1 === "scissors" ) {
 return "Player 2 won!"
 }
 if (p1===p2)  return "Draw!"   
};
```

 5. Persistent Bugger exercise

`Description` 
 
 Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):
```
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
 ```
 `Solution`
```javascript
function persistence(num) {
  
  let counter = 0; 
  let digits = num.toString().split(""); 

  
  while (digits.length > 1){ 

    let results = 1; 

    for(let i = 0; i < digits.length; i++){ 

      results = results * digits[i]; 

    } 

    digits = results.toString().split(""); 

    counter = counter + 1; 

  } 
  
  return counter; 
} 
```
