<h1 align="center">Typescript - Week 6</h1>

## Week goal 🏁

<p>Learn about classes, instances, inheritance and data type with Typescript</p>

## Week subtopics

- Introduction to Object Oriented Programming
  - Abstraction
  - Inheritance
  - Polymorphism
  - Encapsulation
- Concept of class
  - Attributes
  - Methods
  - Constructor
- Classes with Typescript
- Concept of instance

## Week challenges (Monday) 💻

1. [Declare variable types in TypeScript](https://docs.microsoft.com/en-us/learn/modules/typescript-declare-variable-types/) guided exercise, using `Typescript`

JavaScript is a dynamically typed language. The static type system in TypeScript allows you to describe the shape of an object, have better documentation, and let TypeScript validate that your code works correctly. How a type is formed and associated with a linguistic entity depends on the entity type. Los tipos null y undefined son subtipos de todos los demás tipos.

 types in TypeScript :
 
 The main benefit of Typescript is that it enables you to add static types to your JavaScript code. Types place static constraints on program entities, such as functions, variables, and properties, so that compilers and development tools can offer better verification and assistance during development.

Declaring let and const variables

ECMAScript 2015 added the let and const keywords for variable declaration in JavaScript, which eliminated some of the problems associated with the var keyword in previous versions. This change makes it possible to declare variables with block level scope and prevents you from declaring the same variable multiple times.

TypeScript encourages the use of the let and const keywords for variable declarations.

 `Note: let declarations can be done without initialization. const declarations are always initialized with a value. And const declarations, once assigned, can never be reassigned.`
 
 
 `Exercise - Type inference in TypeScript`
 

[Screenshot (58)](https://user-images.githubusercontent.com/108826299/187129725-6e13045c-8ae6-46d1-b059-b62e231b2668.png)

TypeScript now treats x as a number type. TypeScript also infers the type of y to be a number type because that is the type of the value used to initialize it. But what happens if you try to assign a different value type to it? And what happens to the variable z?

Open the Errors tab in the Playground so you can monitor for any errors.

Enter x = 1. This should work as expected with no errors.

Enter x = "one". As expected, this raises the error Type 'string' is not assignable to type 'number' because static type checking does not allow a string to be assigned to the variable.

Enter y = "one". You'll see that the same error is raised. This is because TypeScript has inferred that y is of type number.

Enter the variable name y followed by a period and you'll notice one more thing. Even though you didn't explicitly specify a type for the variable y, Intellisense is providing methods that only apply to a number type.

Enter z = 1 and z = "one". TypeScript accepted both but why? This works in the same way that it works in JavaScript because variable z can now accept any value assigned to it. (TypeScript has inferred the z is of type any because you did not assign a type or initialize it when it was declared. You'll learn more about the any type later.)

`Types and subtypes in TypeScript`

1. Any type: All types in TypeScript are subtypes of a single top type called the any type. The any type is the one type that can represent any JavaScript value with no constraints.

2. Primitive types: The primitive types are the boolean, number, string, void, null, and undefined types along with user-defined enumeration or enum types. The void type exists purely to indicate the absence of a value, such as in a function with no return value. The null and undefined types are subtypes of all other types.

Boolean type
The most basic datatype is the true or false value, known as a boolean.
```typescript
let flag: boolean;
let yes = true;
let no = false;
```
Number and BigInteger types
As in JavaScript, all numbers in TypeScript are either floating point values or BigIntegers. These floating-point numbers get the type number, while BigIntegers get the type bigint
```typescript
let x: number;
let y = 0;
let z: number = 123.456;
let big: bigint = 100n;
```
String type
The string keyword represents sequences of characters stored as Unicode UTF-16 code units. Like JavaScript, TypeScript also uses double quotes (") or single quotes (') to surround string data.
```typescript
let s: string;
let empty = "";
let abc = 'abc';
```
In TypeScript, you can also use template strings, which can span multiple lines and have embedded expressions.
These strings are surrounded by the backtick/backquote ( ` ) character, and embedded expressions are of the form ${ expr }.
```typescript
let firstName: string = "Mateo";
let sentence: string = `My name is ${firstName}.
    I am new to TypeScript.`;
console.log(sentence); // My name is Mateo.
                           I am new to TypeScript.   
```
The void, null, and undefined types
JavaScript and TypeScript have two primitive values used to signal absent or uninitialized value: null and undefined. 


 `enums`

A helpful addition to the standard set of datatypes from JavaScript is the enumeration type, or enum.

Enumerations offer an easy way to work with sets of related constants. An enum, is a symbolic name for a set of values. Enumerations are treated as data types, and you can use them to create sets of constants for use with variables and properties.

Using enumerations:

- Helps reduce errors caused by transposing or mistyping numbers.
- Makes it easy to change values in the future.
- Makes code easier to read, which means it is less likely that errors will creep into it.
- Ensures forward compatibility. With enumerations, your code is less likely to fail if in the future someone changes the values corresponding to the member names.

Enums allow you to specify a list of available options. They're extremely useful when you have a set of values a particular variable type may take.


3. Object types and type parameters: The object types are all class, interface, array, and literal types (anything that is not a primitive type.)

Class and interface types are introduced through class and interface declarations and are referenced by the name given to them in their declarations.



-Advantages of declaring typed variables in TypeScript.
- Declare variables using primitive types:
- Declare variables using object types.!
- Declare variables using union and intersection types.

2. [TypeScript Object Type](https://typescript-exercises.github.io/#exercise=1) exercise
3. [TypeScript Unions](https://typescript-exercises.github.io/#exercise=2) exercise

## Week challenges (Tuesday) 💻

1. [Square(n) Sum](./exercises/e00/desc) exercise, using `Typescript`
2. [A Wolf In Sheep's Clothing](./exercises/e03/desc) exercise, using `Typescript`

## Week challenges (Wednesday) 💻

1. [A Rule Of Divisibility By 13](./exercises/e04/desc) exercise, using `Typescript`
2. [Playing With Digits](./exercises/e05/desc) exercise, using `Typescript`


## Week challenges (Thursday) 💻

1. [Declare and instantiate classes in TypeScript](https://docs.microsoft.com/en-us/learn/modules/typescript-declare-instantiate-classes/) guided exercise, using `Typescript`
2. [Tile](./exercises/e09/desc) exercise, using `Typescript`
3. [Time](./exercises/e10/desc) exercise, using `Typescript`
4. [Rational](./exercises/e11/desc) exercise, using `Typescript`

## Extra (It is not mandatory for the Readme) ⭐
1. [Growth Of A Population](./exercises/e01/desc) exercise, using `Typescript`
2. [Mumbling](./exercises/e02/desc) exercise, using `Typescript`
3. [Valid Braces](./exercises/e06/desc) exercise, using `Typescript`
4. [Tic-Tac-Toe](./exercises/e07/desc) exercise, using `Javascript`
5. [Tic-Tac-Toe-Like Table Generator](./exercises/e08/desc) exercise, using `Javascript`


## Week links 🔗

1. [Everyday types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) in typescript

## Session links 🔗

1. [OOP Typescript - Session example 08](https://github.com/corecodeio/funda03-e08)
2. [More OOP Typescript - Session example 09](https://github.com/corecodeio/funda03-e09)
