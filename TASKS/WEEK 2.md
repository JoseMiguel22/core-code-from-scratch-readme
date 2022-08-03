<h1 align="center">Javascript - Week 2</h1>

## Week goal 🏁

## Week challenges (Monday) 💻

- [x] 1. Follow the github course, you can find it [here](https://www.udacity.com/course/version-control-with-git--ud123)
2. Create an account in Codewars, follow [this instructions](./_create_account_codewars/)
3. Read about: [if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
4. Read about: [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
5. Read about: [while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
6. Read about: [functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)

## Week challenges (Tuesday) 💻

1. Start this [HTML](https://edpuzzle.com/join/vawasaj) course
2. [Multiply](./exercises/e00/desc) exercise

### Solution
```javascript
function multiply(a, b){
  return a * b
}
```

3. [ASCII Total](./exercises/e01/desc) exercise
### Solution
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
2. [Char From ASCII Value](./exercises/e02/desc) exercise
### Solution
```javascript
function getChar(c){
  return String.fromCharCode(c);
}
```
3. [Binary Addition](./exercises/e03/desc) exercise
### Solution
```javascript
function addBinary(a,b) {
  const suma = a + b;
  return suma.toString(2);
}
```
4. [Student's Final Grade](./exercises/e04/desc) exercise
### Solution
```javascript
function finalGrade (exam, projects) {
  return exam > 90 || projects > 10 ? 100
  : exam > 75 && projects >= 5 ? 90
  : exam > 50 && projects >= 2 ? 75
  : 0 
}
```

## Week challenges (Thursday) 💻

1. Follow up with the [HTML](https://edpuzzle.com/join/vawasaj) course you started on Tuesday
2. [Remove All Exclamation Marks From The End Of Sentence](./exercises/e09/desc) exercise
### Solution
```javascript
function remove (string) {  
  return string.replace(/!+$/, "");
}
```
3. [Vowel Remover](./exercises/e10/desc) exercise
### Solution
```javascript
function shortcut (string) {
  return string.replace(/[aeiou]/g, "");
}
```

4. [Rock Paper Scissors!](./exercises/e11/desc) exercise
### Solution
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

5. [Persistent Bugger](./exercises/e12/desc) exercise
### Solution
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
## Extra (It is not mandatory for the Readme) ⭐

1. [Holiday VIII - Duty Free](./exercises/e05/desc) exercise
2. [Twice As Old](./exercises/e06/desc) exercise
3. [Valid Spacing](./exercises/e07/desc) exercise
4. [Fake Binary](./exercises/e08/desc) exercise

