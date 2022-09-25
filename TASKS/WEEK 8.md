<h1 align="center">Typescript - Week 8</h1>

## Week goal 🏁

<p>Learn about abstract classes, generics and other Typescript types</p>


## Week challenges (Monday) 💻

- [x] 1. Watch [Object-Oriented Programming - Resume](https://www.youtube.com/watch?v=pTB0EiLXUC8) video

<details>
<summary>Resume</summary>

A popular interview question concerns the four basic concepts of object-oriented programming. These concepts are encapsulation, abstraction, inheritance, and polymorphism. Before programming oriented to use a programming procedure that divided objects in a program into a set of functions, so that having data stored in a bunch of variables and functions that operate on the data, this style of programming is very simple and straightforward. It's often what we learn as part of our programming course at a university but as our programs grow we end up with a bunch of functions that are all over the place, we may find ourselves copying and pasting lines of code over and over again , we make a change in a function and then we vary other functions and they break, that is what is known as spaghetti code, there is a lot of interdependence between all these functions and it becomes problematic and object-oriented programming came to solve this problem.

Object-oriented programming combines a group of variables and related functions into one unit. We call that unit an object. We refer to these variables as properties and functions as methods.
In object-oriented programming we group related variables and functions that operate on them into objects and this is what we call encapsulation.

Abstraction allows us to use a technique for our objects so that we can hide some of the properties and methods from the outside and this gives us a couple of benefits first is that we will make the interface of those objects simpler, by compressing an object with some properties and methods is easier than an object with several properties and methods, the second benefit is that it helps us reduce the impact of the change, let's imagine that tomorrow we change these internal or private methods these changes will leak to the outside because we don't have any code that touch these methods outside of their container object. We can remove a method or change its parameters but neither of these changes will affect the rest of the application code so with abstraction we reduce the impact of changing.

The third central concept in object-oriented programming is inheritance, which is a mechanism that allows you to eliminate redundant code.

Finally polymorphism, poly means many, morphism means shape, and polymorphism means many shapes in object orientation. Programming polymorphism is a technique that allows you to get rid of long ethanol or switch and case statements.

These are the benefits of object oriented programming, programming using encapsulation we group related variables and functions together and in this way we can reduce complexity now we can reuse this and make object from parts of a program or in different programs with abstraction we hide the details and complexity and show only the essentials, this technique reduces complexity and also isolates the impact of code changes with inheritance we can eliminate redundant code and with polymorphism we can refactor ugly switch/case statements.
</details>

## Week challenges (Tuesday) 💻

- [ ] 1. [Develop typed functions by using TypeScript](https://docs.microsoft.com/en-us/learn/modules/typescript-develop-typed-functions/) guided exercise, using `Typescript`

<details>
<summary>Create functions in TypeScript</summary>

In `JavaScript`, function definitions don't specify data types for parameters, perform type checking on the passed arguments, or check the number of arguments received. Therefore, you must add the logic for checking these parameters to your functions.

`TypeScript` simplifies the development of functions and makes them easier to troubleshoot by enabling you to type parameters and return values. TypeScript also adds new options for parameters. For example, while all parameters are optional in JavaScript functions, you can choose to make parameters required or optional in TypeScript.

Adding types to functions help prevent you from passing values that you shouldn't pass to your functions. This is especially important when you're working with larger code bases or functions developed by others. While adding types is a simple difference, it offers the benefit of type checking the values that you pass to the function and what is returned.

As in `JavaScript`, we can define functions in `TypeScript` several different ways. Let's look at how these functions differ with the addition of types in `TypeScript`.

`Named functions`

A named function is a function declaration written with the function keyword and provided with a distinct name within the current scope

The syntax for declaring a named function in TypeScript is the same as defining one in JavaScript. The only difference with TypeScript is that you can provide a type annotation for the function's parameters and return value.

This function accepts two parameters of type number and returns a number.

```typescript
function addNumbers (x: number, y: number): number {
   return x + y;
}
addNumbers(1, 2);
```

`Anonymous functions`

A function expression (or anonymous function) is a function that isn't pre-loaded into the execution context, and only runs when the code encounters it. Function expressions are created at runtime and must be declared before they can be called. 

Function expressions represent values so they're usually assigned to a variable or passed to other functions, and can be anonymous, meaning the function has no name.

This example assigns a function expression to the variable addNumbers. Notice that function appears in place of the function name, making the function anonymous. You can now use this variable to call the function.

```typescript
let addNumbers = function (x: number, y: number): number {
   return x + y;
}
addNumbers(1, 2);
```
This shows what the named function sum looks like when written as an anonymous function. Notice that the name add has been replaced with function and the function has been implemented as an expression in a variable declaration.


`Arrow functions`

Also called Lambda or fat arrow functions because of the `=>` operator used to define them, provide shorthand syntax for defining an anonymous function. Due to their concise nature, arrow functions are often used with simple functions and in some event handling scenarios.

This example compares the syntax of an anonymous function to a single line arrow function. The arrow function abbreviates the syntax by omitting the function keyword and adding the => operator between the parameters and the function body.

```typescript
// Anonymous function
let addNumbers1 = function (x: number, y: number): number {
   return x + y;
}

// Arrow function
let addNumbers2 = (x: number, y: number): number => x + y;
```
```
Note: Single line arrow functions can use concise body syntax, or implicit return, which allows the omission of the curly brackets and the return keyword.

If the function body has more than a single line, enclose it in curly braces and include the return statement (if appropriate.) 
```
</details>

<details>
<summary>Fun with parameters</summary>

</details>

<details>
<summary>Lab - Use functions in TypeScript</summary>
</details>


- [ ] 2. Read [Abstract Classes](https://sbcode.net/typescript/abstract_classes/)
- [ ] 3. Watch [Abstract Classes vs Interfaces](https://www.youtube.com/watch?v=Lnqmde9LP74) video

## Week challenges (Wednesday) 💻

- [ ] 1. [Make the Deadfish Swim](./exercises/e01/desc) exercise, using `Typescript`
- [ ] 2. [Duplicate Encoder](./exercises/e03/desc) exercise, using `Typescript`
- [ ] 3. [Find The Odd Int](./exercises/e04/desc) exercise, using `Typescript`
- [ ] 4. [Which Are In?](./exercises/e05/desc) exercise, using `Typescript`

## Week challenges (Thursday) 💻

- [ ] 1. [Define generics in TypeScript](https://docs.microsoft.com/en-us/learn/modules/typescript-generics/) guided exercise, using `Typescript`
- [ ] 2. [Generics](./exercises/e00/desc) exercise, using `Typescript`
- [x] 3. ✨ 5th Core Challenge, update your resume [here](https://corecode.notion.site/CV-or-Resume-Boost-9092fff9f9cf4944a7c1717b11b09223)
