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

<details>
<summary>Types in TypeScript</summary>
 
 The main benefit of Typescript is that it enables you to add static types to your JavaScript code. Types place static constraints on program entities, such as functions, variables, and properties, so that compilers and development tools can offer better verification and assistance during development.
</details>

<details>
<summary>Declaring let and const variables</summary>


ECMAScript 2015 added the let and const keywords for variable declaration in JavaScript, which eliminated some of the problems associated with the var keyword in previous versions. This change makes it possible to declare variables with block level scope and prevents you from declaring the same variable multiple times.

TypeScript encourages the use of the let and const keywords for variable declarations.

 `Note: let declarations can be done without initialization. const declarations are always initialized with a value. And const declarations, once assigned, can never be reassigned.`
 
 
 `Exercise - Type inference in TypeScript`
 
TypeScript now treats x as a number type. TypeScript also infers the type of y to be a number type because that is the type of the value used to initialize it. But what happens if you try to assign a different value type to it? And what happens to the variable z?

Open the Errors tab in the Playground so you can monitor for any errors.

Enter x = 1. This should work as expected with no errors.

Enter x = "one". As expected, this raises the error Type 'string' is not assignable to type 'number' because static type checking does not allow a string to be assigned to the variable.

Enter y = "one". You'll see that the same error is raised. This is because TypeScript has inferred that y is of type number.

Enter the variable name y followed by a period and you'll notice one more thing. Even though you didn't explicitly specify a type for the variable y, Intellisense is providing methods that only apply to a number type.

Enter z = 1 and z = "one". TypeScript accepted both but why? This works in the same way that it works in JavaScript because variable z can now accept any value assigned to it. (TypeScript has inferred the z is of type any because you did not assign a type or initialize it when it was declared. You'll learn more about the any type later.)

</details>

<details>
<summary>Types and subtypes in TypeScript</summary>
 
 `Any type:` All types in TypeScript are subtypes of a single top type called the any type. The any type is the one type that can represent any JavaScript value with no constraints.

`Primitive types:` The primitive types are the `boolean`, `number`, `string`, `void`, `null`, and `undefined` types along with user-defined enumeration or `enum` types. The void type exists purely to indicate the absence of a value, such as in a function with no return value. The null and undefined types are subtypes of all other types.

`Object types and type parameters`
The object types are all class, interface, array, and literal types (anything that is not a primitive type.)

Class and interface types are introduced through class and interface declarations and are referenced by the name given to them in their declarations. Class and interface types may be generic types that have one or more type parameters.

`Primitive types in TypeScript`

`Boolean type`

The most basic datatype is the true or false value, known as a boolean.
```typescript
let flag: boolean;
let yes = true;
let no = false;
```
`Number and BigInteger types`

As in JavaScript, all numbers in TypeScript are either floating point values or BigIntegers. These floating-point numbers get the type number, while BigIntegers get the type bigint
```typescript
let x: number;
let y = 0;
let z: number = 123.456;
let big: bigint = 100n;
```
`String type`

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
`The void, null, and undefined types`

JavaScript and TypeScript have two primitive values used to signal absent or uninitialized value: null and undefined. 
</details>

<details>
<summary>Enums</summary>

A helpful addition to the standard set of datatypes from JavaScript is the enumeration type, or enum.

Enumerations offer an easy way to work with sets of related constants. An `enum`, is a symbolic name for a set of values. Enumerations are treated as data types, and you can use them to create sets of constants for use with variables and properties.

`Using enumerations:`

- Helps reduce errors caused by transposing or mistyping numbers.
- Makes it easy to change values in the future.
- Makes code easier to read, which means it is less likely that errors will creep into it.
- Ensures forward compatibility. With enumerations, your code is less likely to fail if in the future someone changes the values corresponding to the member names.

Enums allow you to specify a list of available options. They're extremely useful when you have a set of values a particular variable type may take.

`Creating an enum`

Enums allow you to specify a list of available options. They're extremely useful when you have a set of values a particular variable type may take. Let's imagine you have field in a external database called ContractStatus, which contains numbers 1, 2, or 3, that represent the following contact statuses: Permanent, Temp, and Apprentice. We will create an enum with these values, and explore the TypeScript support.


- Create an enum to represent our scenario by entering the following:
```typescript
enum ContractStatus {
     Permanent,
     Temp,
     Apprentice
}
```

- Now, declare a variable for a new employee named employeeStatus of the type ContractStatus and assign "Temp". Display the result to the console.
```typescript
let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);
```
- Select Run. Note the value displayed in the Log window. What value is returned?

- By default, enum values begin with a value of 0, so Permanent is 0, Temp is 1, and Apprentice is 2. If you want the values to start with a different value, in this case 1, specify that in the enum declaration. Make the following edits to have the enum start the values at 1.
```typescript
enum ContractStatus {
     Permanent = 1,
     Temp,
     Apprentice
}
```

- Rerun the code by selecting Run. Notice the value displayed is now 2.

- To display the name associated with the enum, we can use the indexer provided. Add the following to the bottom of your code:
```typescript
console.log(ContractStatus[employeeStatus]);
```
- Run the code. Notice the value Temp is displayed, which is the name of the enum for Temp or 2.

Object types and type parameters: The object types are all class, interface, array, and literal types (anything that is not a primitive type.)

Class and interface types are introduced through class and interface declarations and are referenced by the name given to them in their declarations.
</details>

<details>
<summary>Any and unknown types in TypeScript</summary>

`Any type`

 Is the one type that can represent any JavaScript value with no constraints. This can be useful when you're expecting a value from a third-party library or user inputs where the value is dynamic because the any type will allow you to reassign different types of values. And, as mentioned earlier, using the any type allows you to gradually migrate your JavaScript code to use static types in TypeScript

```typeScript
let randomValue: any = 10;
randomValue = 'Mateo';   // OK
randomValue = true;      // OK
```
When this example is compiled, it doesn't throw an error because the any type encompasses values of every possible type.

Using the any type in this example allows you to call:

- A property that doesn't exist for the type.
- randomValue as a function.
- A method that only applies to a string type.

Because randomValue is registered as any, all of the following examples are valid TypeScript and will not generate a compile-time error. 
```typeScript
console.log(randomValue.name);  // Logs "undefined" to the console
randomValue();                  // Returns "randomValue is not a function" error
randomValue.toUpperCase();      // Returns "randomValue is not a function" error
```

 `Important: Remember that all the convenience of any comes at the cost of losing type safety. Type safety is one of the main motivations for using TypeScript. You should avoid using any when it's not necessary.`

`Unknown type`

While flexible, the any type can cause unexpected errors. To address this, TypeScript introduced the unknown type.

The unknown type is similar to the any type in that any value is assignable to type unknown. However, you can't access any properties of an unknown type, nor can you call or construct them.

This example changes the any type in the previous example to unknown. It will now raise type check errors and prevent you from compiling the code until you take appropriate action to resolve them.

```typeScript
let randomValue: unknown = 10;
randomValue = true;
randomValue = 'Mateo';

console.log(randomValue.name);  // Error: Object is of type unknown
randomValue();                  // Error: Object is of type unknown
randomValue.toUpperCase();      // Error: Object is of type unknown
```

`Note The core difference between any and unknown is you are unable to interact with a variable of type unknown; doing so generates a compiler error.`

`Type assertion`

 A type assertion tells TypeScript you have performed any special checks that you need before calling the statement. It tells the compiler "trust me, I know what I’m doing." A type assertion is like a type cast in other languages, but it performs no special checking or restructuring of data. It has no runtime impact and is used purely by the compiler.

Type assertions have two forms. One is the `as`-syntax:

`(randomValue as string).toUpperCase();`

The other version is the "angle-bracket" syntax:

`(<string>randomValue).toUpperCase();`

`Note: as is the preferred syntax. Some applications of TypeScript, such as JSX, can get confused when using < > for type conversions.`

The following example performs the necessary check to determine that randomValue is a string before using type assertion to call the toUpperCase method.
```typescript
let randomValue: unknown = 10;

randomValue = true;
randomValue = 'Mateo';

if (typeof randomValue === "string") {
    console.log((randomValue as string).toUpperCase());    //* Returns MATEO to the console.
} else {
    console.log("Error - A string was expected here.");    //* Returns an error message.
}
```

TypeScript now assumes that you have made the necessary check. The type assertion says that randomValue should be treated as a string and then the toUpperCase method can be applied.


`Type guards`

The previous example demonstrates the use of typeof in the if block to examine the type of an expression at runtime. This is called a type guard.

You may be familiar with using typeof and instanceof in JavaScript to test for these conditions. TypeScript understands these conditions and will change type inference accordingly when used in an if block.
```typescript
Type	Predicate
string	typeof s === "string"
number	typeof n === "number"
boolean	typeof b === "boolean"
undefined	typeof undefined === "undefined"
function	typeof f === "function"
array	Array.isArray(a)
```

</details>

<details>
<summary>Union and intersection types in TypeScript</summary>

`Union types`

A union type describes a value that can be one of several types. This can be helpful when a value is not under your control (for example, values from a library, an API, or user input.)

The union types restrict the assignment of values to the specified types, whereas the any type has no restrictions. Another reason is Intellisense support.

A union type uses the vertical bar or pipe (`|`) to separate each type. In the following example, multiType can be a number or a boolean:
```typescript
let multiType: number | boolean;
multiType = 20;         //* Valid
multiType = true;       //* Valid
multiType = "twenty";   //* Invalid
```
Using `type guards`, you can easily work with a variable of a union type. In this example, the add function accepts two values that can be either a number or a string. If both values are number types, it adds them. If both are string types, it concatenates them. Otherwise, it raises an error.
```typescript
function add(x: number | string, y: number | string) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two'));  //* Returns "onetwo"
console.log(add(1, 2));          //* Returns 3
console.log(add('one', 2));      //* Returns error
```
`Intersection types`

Are closely related to union types, but they are used very differently. An intersection type combines two or more types to create a new type that has all properties of the existing types. This allows you to add together existing types to get a single type that has all the features you need.

An Intersection type uses the ampersand (`&`) to separate each type.

Intersection types are most often used with interfaces. The following example defines two interfaces, Employee and Manager, and then creates a new intersection type called ManagementEmployee that combines the properties in both interfaces.

```typescript
interface Employee {
  employeeID: number;
  age: number;
}
interface Manager {
  stockPlan: boolean;
}
type ManagementEmployee = Employee & Manager;
let newManager: ManagementEmployee = {
    employeeID: 12345,
    age: 34,
    stockPlan: true
};
```
`Literal types`

A literal is a more concrete subtype of a collective type. What this means is that "Hello World" is a string, but a string is not "Hello World" inside the type system.

There are three sets of literal types available in TypeScript: string, number, and boolean. By using literal types, you can specify an exact value that a string, number, or boolean must have.

`What is literal narrowing?`

When you declare a variable using var or let in TypeScript, you are telling the compiler that there is the chance that this variable will change its contents. Declaring a variable with let types the variable (for example, as a string), allowing for an infinite number of potential values.

In contrast, using const to declare a variable will inform TypeScript that this object will never change. Declaring with const types it to the value (for example, "Hello World").

`Defining literal types`

Literal types are written as object, array, function, or constructor type literals and are used to compose new types from other types.

The best way to demonstrate the use of literal types is with an example. This type definition creates a literal type called testResult, which can contain one of three string values:
```typescript
type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete";    //* Valid
myResult = "pass";          //* Valid
myResult = "failure";       //* Invalid
```
When setting the value of the variable myResult, "incomplete" and "pass" are valid entries, while "failure" is not because it is not one of the items in the testResult type definition.

TypeScript also has numeric literal types, which act the same as the string literals above.

```typescript
type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 1;    //* Valid
diceRoll = 2;    //* Valid
diceRoll = 7;    //* Invalid
```
You can also use boolean values when defining literal types, or any combination of types.

</details>
<details>
<summary>Collection types in TypeScript</summary>

`Arrays`

TypeScript, like JavaScript, allows you to work with arrays. Arrays can be written in one of two ways. In the first, you use the type of the elements followed by square brackets (`[ ]`) to denote an array of that element type:
```typescript
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
```
The second way uses a generic Array type, using the syntax Array<type>

There is no advantage to using one over the other so it's up to you to decide which syntax to use.

`Tuples`

Having an array of the same value types is useful, but sometimes you have an array that contains values of mixed types. For that purpose, TypeScript provides the Tuple type. To declare a Tuple, use the syntax variableName: [type, type, ...].

`Exercise - Tuples`
- Enter the following code to create a Tuple that contains a string and a number:
```typescript
let person1: [string, number] = ['Marcia', 35];
```
- Try to add another item to the array. For example:
```typescript
let person1: [string, number] = ['Marcia', 35, true];
```
- You'll see that an error is raised because the elements in the Tuple array are fixed. The person1 Tuple is an array that contains exactly one string value and one numeric value.

- Try switching the order of the items in the array. For example:
```typescript
let person1: [string, number] = [35, 'Marcia'];
```
- You'll see an error that indicates that the order of the values must match the order of the types.

</details>

<details>
<summary>Lab - Use types in TypeScript</summary>

```typescript
/*  EXERCISE 1
    TO DO: Modify the code to add types to the variable declarations. 
    The resulting JavaScript should look the same as the original example when you're done. */

let firstName;
let lastName;
let fullName;
let age;
let ukCitizen;

firstName = 'Rebecca';
lastName = 'Smith';
age = 42;
ukCitizen = false;
fullName = firstName + " " + lastName;

if (ukCitizen) {
    console.log("My name is " + fullName + ", I'm " + age + ", and I'm a citizen of the United Kingdom.");
} else {
    console.log("My name is " + fullName + ", I'm " + age + ", and I'm not a citizen of the United Kingdom.");
}
```

`Solution`
```typescript
let firstName;
let lastName;
let fullName;
let age;
let ukCitizen;

firstName = 'Rebecca';
lastName = 'Smith';
age = 42;
ukCitizen = false;
fullName = firstName + " " + lastName;

if (ukCitizen) {
    console.log("My name is " + fullName + ", I'm " + age + ", and I'm a citizen of the United Kingdom.");
} else {
    console.log("My name is " + fullName + ", I'm " + age + ", and I'm not a citizen of the United Kingdom.");
}
```

```typescript
/* EXERCISE 2
   TO DO: You can use types to ensure operation outcomes. Run the code as is and then modify 
   it to have strongly typed variables. Then, address any errors you find so that the result 
   returned to a is 12. */

let x;
let y;
let a;

x = 'five';
y = 7;
a = x + y;

console.log(a);
```
`Solution`
```typescript
let x: number;
let y: number;
let a: number;

x = 5;
y = 7;
a = x + y;

console.log(a);
```

```typescript
/* EXERCISE 3
   TO DO: In the following code, implement an enum type called Season that represents 
   the constants "Fall", "Winter", "Spring", and "Summer". Then, update the function so 
   you can pass in the season by referencing an item in the enum, for example 
   Season.Fall, instead of the literal string "Fall". */

function whichMonths(season) {
    let monthsInSeason: string;
    switch (season) {
        case "Fall":
            monthsInSeason = "September to November";
            break;
        case "Winter":
            monthsInSeason = "December to February";
            break;
        case "Spring":
            monthsInSeason = "March to May";
            break;
        case "Summer":
            monthsInSeason = "June to August";
    }
    return monthsInSeason;
}

console.log(whichMonths("Fall"));
```

`Solution`
```typescript
enum Seasons {
    FALL= 'Fall',
    WINTER= 'Winter',
    SPRING = 'Spring',
    SUMMER = 'Summer'
}


function whichMonths(season: Seasons) {

    let monthsInSeason: string = "";

    switch (season) {
        case "Fall":
            monthsInSeason = "September to November";
            break;
        case "Winter":
            monthsInSeason = "December to February";
            break;
        case "Spring":
            monthsInSeason = "March to May";
            break;
        case "Summer":
            monthsInSeason = "June to August";
    }

    return monthsInSeason;
}

console.log(whichMonths(Seasons.FALL));
```

```typescript
/* EXERCISE 4
   TO DO: Declare the array as the type to match the type of the items in the array. */

let randomNumbers;
let nextNumber;
for (let i = 0; i < 10; i++) {
    nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
    randomNumbers.push(nextNumber);
}

console.log(randomNumbers);
```
`Solution`
```typescript
 let randomNumbers: number[] = [];
   let nextNumber: number;
   
   for (let i = 0; i < 10; i++) {
       nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
       randomNumbers.push(nextNumber);
   }
   
   console.log(randomNumbers);
```
</details>




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
