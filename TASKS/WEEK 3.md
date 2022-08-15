<h1 align="center">Javascript - Week 3</h1>

## Week goal 🏁

<p>Learn about Javascript behaviour</p>

## Week subtopics

- scopes
- var, let, const
- Operators
  - TypeOf
- Data structure
  - Array
  - List
  - Stack
- Object
- DOM API

## Week challenges (Monday) 💻

1. Who Likes It? exercise

`Description`

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
```
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
``` 
`Solution`
```javascript
function likes(names) {
   if (names.length === 0){ return 'no one likes this';
  } else if (names.length === 1){ return `${names[0]} likes this`;
  } else if (names.length === 2){ return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3){return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } return `${names[0]}, ${names[1]} and ${names.length-2} others like this`;
};
``` 
2. Bit Counting exercise

`Description`

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of `1234` is `10011010010`, so the function should return `5` in this case


`Solution`
```javascript
var countBits = function(n){
return n.toString(2).replace(/0/g; "").length;
};
``` 

3. Your Order, Please exercise

`Description`

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

example:
``` 
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
``` 
`Solution`
```javascript
function order(words){
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
  }
```
## Week challenges (Tuesday) 💻

1. Simple Pig Latin exercise

`Description`

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

example:
```
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
``` 
`Solution`
```javascript
 function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}
```
2. Counting Duplicates exercise

`Description`

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
```
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
```

`Solution`
```javascript
function duplicateCount(text){
   let duplicates = 0;
  text = text.toLowerCase(); 
  for(let i = 0; i < text.length; i++) {
    if(text.indexOf(text[i]) !== text.lastIndexOf(text[i])) {
      duplicates++;
      text = text.replace(new RegExp(`${text[i]}`, 'g'), '');
      i = i-1;
    }
  }
  return duplicates;
}
```
5. Decode The Morse Code exercise
 
 `Description`
 
 In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

For example:
```
 decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"
 ```
 NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.
`Solution`
```javascript
decodeMorse = function(morseCode){
  return morseCode
    .split(' ')
    .map((word) => MORSE_CODE[word] || ' ')
    .join('')
    .replace(/  /g, ' ')
    .trim();
};
```
## Week challenges (Wednesday) 💻

1. Valid Parentheses exercise
 
 `Description`

Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples

```
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
```
Constraints

`0 <= input.length <= 100`

`Solution`
```javascript
function validParentheses(parens) {
  let valid = 0;
  for (let i = 0; i < parens.length; i++){
    if (parens[i] === ')') valid--;
    if (parens[i] === '(') valid++;
    if (valid < 0) return false;
  }
    
  return valid == 0;
}
```
2. Convert String To Camel Case exercise

`Description`

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples

`"the-stealth-warrior"` gets converted to `"theStealthWarrior"`
`"The_Stealth_Warrior"` gets converted to `"TheStealthWarrior"`

`Solution`
```javascript
function toCamelCase(str){
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}
```
3. Unique In Order exercise

`Description`

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

```
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
```

`Solution`
```javascript
var uniqueInOrder=function(iterable){
  let result =[];
  let ultima;
  for(let i = 0 ; i < iterable.length ; i++ ){
    if(iterable[i] !== ultima){
      ultima = iterable[i];
      result.push(ultima);
    }
  }
  return result;
}
```
## Week challenges (Thursday) 💻

1. Fold An Array exercise

`Description`

In this kata you have to write a method that folds a given array of integers by the middle x-times.

An example says more than thousand words:
```
Fold 1-times:
[1,2,3,4,5] -> [6,6,3]

A little visualization (NOT for the algorithm but for the idea of folding):

 Step 1         Step 2        Step 3       Step 4       Step5
                     5/           5|         5\          
                    4/            4|          4\      
1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
----*----      ----*          ----*        ----*        ----*


Fold 2-times:
[1,2,3,4,5] -> [9,6]
```
As you see, if the count of numbers is odd, the middle number will stay. Otherwise the fold-point is between the middle-numbers, so all numbers would be added in a way.

The array will always contain numbers and will never be null. The parameter runs will always be a positive integer greater than 0 and says how many runs of folding your method has to do.

If an array with one element is folded, it stays as the same array.

The input array should not be modified!

`Solution`
```javascript
function foldArray(array, runs) {
  const r = [], c = array.slice();
  while (c.length) r.push(c.pop() + (c.shift() || 0));
  return runs - 1 ? foldArray(r, runs - 1) : r;
}
```

2. Encrypt This! exercise

`Description`

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

1. Your message is a string containing space separated words.

2.You need to encrypt each word in the message using the following rules:

 2.1 The first letter must be converted to its ASCII code.
 
 2.2 The second letter must be switched with the last letter

3.Keepin' it simple: There are no special characters in the input.

Examples:
```
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
```
`Solution`
```javascript
function encrypt(word) {
  if(word.length === 1) return `${word.charCodeAt(0)}`;
  const charBackup = word[1];
  word = word.replace(word[0], word.charCodeAt(0));
  word = word.replace(charBackup, word[word.length-1]);
  word = word.replace(/\w$/, charBackup);
  return word;
}

var encryptThis = function(text) {
  const textArray = text.split(' ');
  let result = '';
  textArray.forEach((w) => {
   result = `${result} ${encrypt(w)}`;
  })
  return result.trim();.
  }
```
3. ✨Complete your 1st [**Core Challenge**](https://corecode.notion.site/Mission-Statement-666f515d76084c8e8c996b473b4d6317). This is one of the requirements for the certification, where you'll boost your dev professional-brand.
