<h1 align="center">Javascript & Pause Day - Week 4</h1>

## Week goal 🏁

<p>Lear about Javascript ES6 features</p>

## Week challenges (Monday) 💻

1. Time to catch up ⏱️ or do extra work ⭐
2. Learn about for of loop

   - [for of](https://www.youtube.com/watch?v=c5a4sNshBA4) video
   - [for of](https://www.w3schools.com/js/js_loop_forof.asp) examples
  
  The `for...of` loop was introduced in the later version of JavaScript ES6. `for...of` loop in JavaScript allows you to iterate over iterable objects (arrays, sets, maps, strings, etc.).
  
  The syntax of the `for...of` loop is:
  ```javascript
  for (variable of iterable){ 
  //body of for...of
  }
  ```
  `iterable:` an iterable object (array, set, string etc).
  
  `variable` items in the iterable.
  
  We can read the above code as: for every element in the iterable, run the body of the loop.
  
  

3. Follow this JavaScript Array Filter

The `filter()` method returns a new array with all elements that pass the test defined by the given function.

The syntax of the filter() method is:
 ```javascript
 arr.filter(callback(element), thisArg)
 ```
  
`callback:` The test function to execute on each array element; returns true if element passes the test, else false. It takes in:

`element:` The current element being passed from the array.

`thisArg (optional):` The value to use as this when executing callback. By default, it is undefined.

4. Follow this JavaScript Array Reduce

The `reduce()` method executes a reducer function on each element of the array and returns a single output value.

The syntax of the reduce() method is:
 ```javascript
 arr.reduce(callback(accumulator, currentValue), initialValue)
 ``` 
`callback:` The function to execute on each array element (except the first element if no initialValue is provided). It takes in

`accumulator:` - It accumulates the callback's return values.

`currentValue:` - The current element being passed from the array.

`initialValue (optional):` A value that will be passed to callback() on first call. If not provided, the first element acts as the accumulator on the first call and callback() won't execute on it.

5. Follow this JavaScript Array Map

The `map()` method creates a new array with the results of calling a function for every array element.

The syntax of the map() method is:
```javascript
arr.map(callback(currentValue), thisArg)
```
`callback:` The function called for every array element. Its return values are added to the new array. It takes in:

`currentValue:` The current element being passed from the array.

`thisArg (optional):` Value to use as this when executing callback. By default, it is undefined.

## Week challenges (Tuesday) 💻

1. Time to catch up ⏱️ or do extra work ⭐
2. Watch this Regular Expressions (RegEx)
3. Read Regular Expressions - MDN
4. Learn about replace
5. Read replace - MDN
6. Check [Regexr](https://regexr.com/), a tool to test your regular expressions (It is not mandatory for the Readme)
7. A complete Regular Expressions


`Resumen`

`Regular Expressions`

A regular expression (often called RegExp or RegEx) is a special string, called a pattern, that uses multiple sequences of characters to define the characteristics for matching a sequence of characters within another string.

A RegExp object can also have flags set along with a pattern to change the way the matches are made.

There are two methods of creating a RegExp object. The first method is literal notation using slashes to delimit the pattern, followed by any flags. The second method uses the RegExp constructor which takes the pattern as the first argument and any flags as the second.
```javascript
// Using literal notation
let re1 = /foo?/i;

// Using RegExp constructor
let re2 = new RegExp('foo?', 'i');
```
There is a difference between the methods. Literal notation compiles when the expression is evaluated. It should be used when the pattern will remain constant, so it won’t be recompiled unnecessarily, such as in a loop.

Using the object constructor means the expression will be compiled at runtime. It should be used when the pattern of the RegExp object would be subject to change, or the pattern is obtained during runtime, such as from user input.


`replace`
The replace() method returns a new string with the specified string/regex replaced.

The syntax of replace() is:

```javascript
str.replace(pattern, replacement)
```

`pattern:`either a string or a regex that is to be replaced

`replacement:`the pattern is replaced with this replacement (can be either a string or a function)

## Week challenges (Wednesday) 💻

1. Time to catch up ⏱️ or do extra work ⭐

## Week challenges (Thursday) 💻

1. ✨Complete your 2nd [**Core Challenge**](https://corecode.notion.site/LinkedIn-Boost-5974abb0f917458ea235d3288ac6c7d3). This is one of the requirements for the certification, where you'll boost your dev professional-brand.
