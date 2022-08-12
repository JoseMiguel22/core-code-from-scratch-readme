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

`Solution`
```javascript
function likes(names) {
  if (names.length === 0) return 'no one likes this';
  if (names.length === 1) return `${names[0]} likes this`;
  if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
  if (names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  return `${names[0]}, ${names[1]} and ${names.length-2} others like this`;
};    
```
2. Bit Counting exercise

`Solution`
```javascript
var countBits = function(n){
return n.toString(2).replace(/0/g; "").length;
};
``` 

3. Your Order, Please exercise

`Solution`
```javascript

```
## Week challenges (Tuesday) 💻

1. [Simple Pig Latin](./exercises/e03/desc) exercise

`Solution`
```javascript
function pigIt(str) {
  let pMarks = ['!', '¡', '?', '¿', '.', ',', ':', ';'];
  str = str.split(' ');
  for (let i = 0; i < str.length; i++) {
    if (pMarks.indexOf(str[i]) >= 0) continue;
    str[i] = str[i].slice(1) + str[i].slice(0, 1) + 'ay';
  }
  return str.join(' ');
}
```
2. Counting Duplicates exercise

`Solution`
```javascript
function duplicateCount(text){
   let duplicates = 0;
  text = text.toLowerCase(); // todo minuscula
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
 
`Solution`
```javascript

```
## Week challenges (Wednesday) 💻

1. Valid Parentheses exercise

`Solution`
```javascript

```
2. Convert String To Camel Case exercise

`Solution`
```javascript
function toCamelCase(str){
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}
```
3. Unique In Order exercise

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

`Solution`
```javascript

```

2. Encrypt This! exercise

`Solution`
```javascript

```
3. ✨Complete your 1st [**Core Challenge**](https://corecode.notion.site/Mission-Statement-666f515d76084c8e8c996b473b4d6317). This is one of the requirements for the certification, where you'll boost your dev professional-brand.
