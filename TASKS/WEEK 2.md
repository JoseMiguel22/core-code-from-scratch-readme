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

`Solution`
```javascript
function multiply(a, b){
  return a * b
}
```

3. ASCII Total exercise

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
  
`Solution`
```javascript
function getChar(c){
  return String.fromCharCode(c);
}
```
3. Binary Addition exercise
 
`Solution`
```javascript
function addBinary(a,b) {
  const suma = a + b;
  return suma.toString(2);
}
```
4. Student's Final Grad exercise

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

`Solution`
```javascript
function remove (string) {  
  return string.replace(/!+$/, "");
}
```
3. Vowel Remover exercise

`Solution`
```javascript
function shortcut (string) {
  return string.replace(/[aeiou]/g, "");
}
```

4. Rock Paper Scissors! exercise3

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
