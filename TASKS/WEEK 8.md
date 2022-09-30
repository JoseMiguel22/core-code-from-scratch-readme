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

- [x] 1. [Develop typed functions by using TypeScript](https://docs.microsoft.com/en-us/learn/modules/typescript-develop-typed-functions/) guided exercise, using `Typescript`

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

The TypeScript compiler assumes, by default, that all parameters defined in a function are required. When a function is called, the TypeScript compiler verifies:

A value has been provided for each parameter.
Only parameters that the function requires are passed to it.
The parameters are passed in the order in which they are defined in the function.
This is different from JavaScript, which assumes that all parameters are optional and allows you to pass more (or fewer) arguments to the function than are defined by it.

`Required parameters`

All function parameters are required, unless otherwise specified, and the number of arguments passed to a function must match the number of required parameters the function expects.


```typescript
function addNumbers (x: number, y: number): number {
   return x + y;
}

addNumbers(1, 2); // Returns 3
addNumbers(1);    // Returns an error
```
In this example, all parameters are required.

`Optional parameters`

You can also define optional parameters by appending a question mark (?) to the end of the parameter name.

In this example, x is required and y is optional. 

```typescript
function addNumbers (x: number, y?: number): number {
    if (y === undefined) {
        return x;
    } else {
        return x + y;
    }
}

addNumbers(1, 2); // Returns 3
addNumbers(1);    // Returns 1
```

```
Note: the optional parameter must come after any required parameters in the parameter list. Also, for this function to return the correct value, you must address the possibility that y may be passed in as undefined.
```
`Default parameters`

You can also assign default values to optional parameters. If a value is passed as an argument to the optional parameter, that value will be assigned to it. Otherwise, the default value will be assigned to it. 

In this example, x is required and y is optional. If value is not passed to y, the default value is 25.

```typescript
function addNumbers (x: number, y = 25): number {
   return x + y;
}

addNumbers(1, 2);  // Returns 3
addNumbers(1);     // Returns 26
```

`Rest Parameters`

If you want to work with multiple parameters as a group (in an array) or don't know how many parameters a function will ultimately take, you can use rest parameters. Rest parameters are treated as a boundless number of optional parameters. You may leave them off or have as many as you want.

This example has one required parameter and an optional parameter called restOfNumbers that can accept any number of additional numbers. The ellipsis (...) before restOfNumbers tells the compiler to build an array of the arguments passed to the function and assigns the name that follows to it so you can use it in your function.

```typescript
let addAllNumbers = (firstNumber: number, ...restOfNumbers: number[]): number => {
   let total: number =  firstNumber;
   for(let counter = 0; counter < restOfNumbers.length; counter++) {
      if(isNaN(restOfNumbers[counter])){
         continue;
      }
      total += Number(restOfNumbers[counter]);
   }
   return total;
}
```
`Deconstructed object parameters`

Function parameters are positional and must be passed in the order in which they are defined in the function.

To enable named parameters you can use a technique called deconstructed object parameters. This enables you to use an interface to defined named, rather than positional, parameters in your functions.

The following example defines an interface called Message that defines two properties. In the displayMessage function, the Message object is passed as a parameter, providing access to the properties as if they are normal parameters.

```typescript
interface Message {
   text: string;
   sender: string;
}

function displayMessage({text, sender}: Message) {
    console.log(`Message from ${sender}: ${text}`);
}

displayMessage({sender: 'Christopher', text: 'hello, world'});
```
</details>

<details>
<summary>Lab - Use functions in TypeScript</summary>

 
```typescript
 /* Module 4: Develop typed functions using TypeScript
   Lab Start  */
```

```typescript
/*  EXERCISE 1
    TODO: Declare a new function type for the sortDescending and sortAscending functions. */
   
   type compareFunctionType = (a: number, b: number) => number;

/*  TODO: Convert the sortDescending and sortAscending functions to arrow 
    functions. */

/*  sortDescending is a comparison function that tells the sort method how to sort 
    numbers in descending order */

let sortDescending: compareFunctionType = (a, b) => {
if (a > b) {
    return -1;
} else if (b > a) {
    return 1;
} else {
    return 0;
}
}

/*  sortDescending is a comparison function that tells the sort method how to sort 
    numbers in ascending order. */

let sortAscending: compareFunctionType = (a, b) => {
if (a > b) {
    return 1;
} else if (b > a) {
    return -1;
} else {
    return 0;
}
}

/*  The buildArray function builds an array of unique random numbers containing the number 
    of items based on the number passed to it. The sortOrder parameter determines 
    whether to sort the array in ascending or descending order. */

/*  TODO: Update the BuildArray function. */

function buildArray(items: number, sortOrder: 'ascending' | 'descending'): number[] {
    let randomNumbers: number[] = [];
    let nextNumber: number;
    for (let counter = 0; counter < items; counter++) {
        nextNumber = Math.ceil(Math.random() * (100 - 1));
        if (randomNumbers.indexOf(nextNumber) === -1) {
          randomNumbers.push(nextNumber);
        } else {
          counter--;
        }
    }
    if (sortOrder === 'ascending') {
      return randomNumbers.sort(sortAscending);
    } else {
      return randomNumbers.sort(sortDescending);
    }
}

let myArray1 = buildArray(12, 'ascending');
let myArray2 = buildArray(8, 'descending');
console.log(myArray1);
console.log(myArray2);
```

```typescript
*  EXERCISE 2
    TODO: Update the LoanCalculator function. */

function loanCalculator (principle: number, interestRate: number, months = 12): string {
    let interest: number = interestRate / 1200;   // Calculates the monthly interest rate
    let payment: number;
    payment = principle * interest / (1 - (Math.pow(1/(1 + interest), months)));
    return payment.toFixed(2);
}

let myLoan = loanCalculator(1000, 5);
console.log(myLoan); //"85.61" 
```
</details>


- [x] 2. Read [Abstract Classes](https://sbcode.net/typescript/abstract_classes/)

Abstract classes are base classes from which other classes can be derived. It may not be formatted directly. Unlike interfaces, abstract classes can contain implementation details of their elements. The abstract keyword is used to define abstract classes and abstract functions within an abstract class.
 
Abstract methods within an abstract class have no implementation and must be applied to the derived class. The structure of abstract functions is similar to that of interface functions, in that they both define the function's signature without its body (the code inside the function). However, abstract methods must be preceded by the abstract keyword, and can optionally contain access modifiers.

Note: 

- An abstract class cannot be directly instantiated, instead it has to be used by inheriting from that class.

- The abstract class cannot be accessed directly by the child classes, they are the ones that have to provide the functionality.

<details>
<summary>Examples</summary>

```typescript
//Example 1

abstract class Animal {
    abstract name: string
    age: number

    constructor(age: number) {
        //this.name = name // this must now be assigned in the derived class instead
        this.age = age
    }

    feed(food: string, amount: number): void {
        console.log(
            'Feeding ' +
                this.name +
                ' the ' +
                this.constructor.name +
                ' ' +
                amount +
                ' kg of ' +
                food
        )
    }
}

class Cat extends Animal {
    name: string
    constructor(name: string, age: number) {
        super(age)
        this.name = name
    }
}

class Dog extends Animal {
    name: string
    constructor(name: string, age: number) {
        super(age)
        this.name = name
    }
}

const CAT = new Cat('Cosmo', 8)
const DOG = new Dog('Rusty', 12)
CAT.feed('Fish', 0.1)
DOG.feed('Beef', 0.25)
```
```typescript
//Example 2

abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log("Department name: " + this.name);
    }

    abstract printMeeting(): void;  // must be applied to derived classes
}

class AccountingDepartment extends Department {

    constructor() {
        // Constructor functions within derived classes must call
        // super()
        super("Accounting and Auditing");
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

let department: Department; //It is allowed to create a reference to an abstract type.
department = new Department(); // Error, cannot instantiate an abstract class
department = new AccountingDepartment(); // Create a copy of a non-abstract subclass and assign it to an allowed variable
department.printName();
department.printMeeting();
department.generateReports(); //Error, function does not exist in abstract type declaration
```
</details>

- [x] 3. Watch [Abstract Classes vs Interfaces](https://www.youtube.com/watch?v=Lnqmde9LP74) video

| abstract class | Interface |
| ------------- | ------------- |
| The abstract keyword is used to create an abstract class and can be used with methods.  | The interface keyword is used to create an interface, but cannot be used with methods. |
| A class can extend only one abstract class.  | A class can implement more than one interface.  |
| An abstract class can provide the implementation of an interface.| An interface cannot provide the implementation of an abstract class. |
| You can have methods with implementations.|Provides an absolute abstraction and cannot have method implementations.|
| You can have public, private, static, and protected access modifiers.|Methods are implicitly public and abstract in the Java interface.|
|Does not support multiple inheritance.|It supports multiple inheritance.|
|It is ideal for code reuse and evolution perspective|It is ideal for the type declaration.|

## Week challenges (Wednesday) 💻

- [x] 1. [Make the Deadfish Swim](./exercises/e01/desc) exercise, using `Typescript`

`Solution`
```typescript
export function parse(data: string): number[] {
    var result: number[] = []
    var current = 0

    data.split('').map((c) => {
      switch (c) {
        case 'i': current++; break
        case 'd': current--; break
        case 's': current = current ** 2; break
        case 'o': result.push(current); break
      }
    })

    return result
}
```

- [x] 2. [Duplicate Encoder](./exercises/e03/desc) exercise, using `Typescript`

`Solution`
```typescript
export function duplicateEncode(word: string) {
  return word
    .toLowerCase()
    .split('')
    .map((a: string, i: number, w: string[]) => {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')';
    })
    .join('');
}
```

- [x] 3. [Find The Odd Int](./exercises/e04/desc) exercise, using `Typescript`

`Solution`
```typescript
export const findOdd = (xs: number[]): number => {
  return (
    xs.find(
      (x: number, i: number, a: number[]) =>
        a.filter((y: number) => y === x).length % 2 === 1
    ) || -1
  );
}
```

- [x] 4. [Which Are In?](./exercises/e05/desc) exercise, using `Typescript`

`Solution`
```typescript
export function inArray(a1: string[], a2: string[]): string[] {
  return a1
      .filter((aWord: string) => {
        return (
          a2.find((bWord: string) => bWord.indexOf(aWord) != -1) != undefined
        );
      })
      .sort();
  }

```
## Week challenges (Thursday) 💻

- [ ] 1. [Define generics in TypeScript](https://docs.microsoft.com/en-us/learn/modules/typescript-generics/) guided exercise, using `Typescript`

<details>
<summary>Introduction to generics</summary>

Generics are code templates that you can define and reuse throughout your codebase. They provide a way to tell functions, classes, or interfaces what type you want to use when you call it.

`Create generic functions when your code is a function or class that:`

- Works with a variety of data types.

- Uses that data type in several places.

`Generics can:`

- Provide more flexibility when working with types.

- Enable code reuse.

- Reduce the need to use the `any` type.

Example of why to use generics:

The `getArray` function generates an array of items of any type.

```typescript
function getArray(items : any[]) : any[] {
    return new Array().concat(items);
}
```
Then, the numberArray variable is declared by calling the getArray function, passing to it an array of numbers, and the stringArray variable is declared with an array of strings. However, because the any type is used, there's nothing preventing the code from pushing a string to the numberArray or a number to the stringArray.

```typescript
let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(['Cats', 'Dogs', 'Birds']);
numberArray.push(25);                       // OK
stringArray.push('Rabbits');                // OK
numberArray.push('This is not a number');   // OK
stringArray.push(30);                       // OK
console.log(numberArray);                   // [5, 10, 15, 20, 25, "This is not a number"]
console.log(stringArray);                   // ["Cats", "Dogs", "Birds", "Rabbits", 30]
```
What if you want to determine the type of the values that the array will contain when you call the function and then have TypeScript do the work of type checking the values that you pass to it to ensure they are of that type? This is where generics come into play.

This example rewrites the `getArray` function using generics. It can now accept any type that you specify when calling the function.

```typescript
function getArray<T>(items : T[]) : T[] {
    return new Array<T>().concat(items);
}
```

Generics define one or more type variables to identify the type or types that you will pass to the component, enclosed in angle brackets (`< >`).

In the example above, the type variable in the function is called `<T>`. T is a commonly used name for a generic.

After you specify the type variable, we can use it in place of the type in parameters, the return type, or anywhere else in the function that we would add a type annotation.

The type variable `T` can be used wherever the type annotation is needed. In the getArray function, it is used to specify the type for the items parameter, the function return type, and to return a new Array of items.

To call the function and pass a type to it, append `<type>` to the function name. For example, `getArray<number>` instructs the function to only accept an array of number values and return an array of number values.

Because the type has been specified as a number, TypeScript will expect that number values will be passed to the function and will raise an error if it's something else.

`Note: If you omit the type variable when calling the function, TypeScript will infer the type. However, this only works with simple data. Passing in arrays or objects infers the type of any and eliminates type checks.`

`Using multiple type variables`

We are not limited to using a single type variable in ours generic components.

For example, the `identity` function accepts two parameters, `value` and `message`, and returns the `value` parameter. You can use two generics, `T` and `U`, to assign different types to each parameter and to the return type. The variable `returnNumber` is initialized by calling the `identity` function with `<number, string>` as the types for the `value` and `message` arguments, `returnString` is initialized by calling it with `<string, string>`, and `returnBoolean` is initialized by calling it with `<boolean, string>`. When using these variables, TypeScript can type check the values and return a compile-time error if there is a conflict.

```typescript
function identity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}

let returnNumber = identity<number, string>(100, 'Hello!');
let returnString = identity<string, string>('100', 'Hola!');
let returnBoolean = identity<boolean, string>(true, 'Bonjour!');

returnNumber = returnNumber * 100;   // OK
returnString = returnString * 100;   // Error: Type 'number' not assignable to type 'string'
returnBoolean = returnBoolean * 100; // Error: Type 'number' not assignable to type 'boolean'
```
</details>

<details>
<summary>Use the methods and properties of a generic type</summary>

When using type variables to create generic components, you may only use the properties and methods of objects that are available for every type. This prevents errors from occurring when you try to perform an operation on a parameter value that is incompatible with the type that's being passed to it.

`Using generic constraints to limit types`

`Generic constraint:`

There are several ways to do this depending on the type variable. One way is to declare a custom type as a tuple and then extend the type variable with the custom type. The following example declares ValidTypes as a tuple with a string and a number. Then, it extends T with the new type. Now, you can only pass number or string types to the type variable.

```typescript
type ValidTypes = string | number;

function identity<T extends ValidTypes, U> (value: T, message: U) : T {
    let result: T = value + value;    // Error
    console.log(message);
    return result
}

let returnNumber = identity<number, string>(100, 'Hello!');      // OK
let returnString = identity<string, string>('100', 'Hola!');     // OK
let returnBoolean = identity<boolean, string>(true, 'Bonjour!'); // Error: Type 'boolean' does not satisfy the constraint 'ValidTypes'.
```

`Using type guards with generics`

You'll notice that TypeScript still raises an issue with the value + value expression in the identity function. But now you know that only number and string types can be passed to the function.

We can use the typeof type guard in an if block to check the type of the value parameter before performing an operation. TypeScript can determine from the if statement if the operation will work with the values provided within the block.

```typescript
type ValidTypes = string | number;
function identity<T extends ValidTypes, U> (value: T, message: U) {   // Return type is inferred
    let result: ValidTypes = '';
    let typeValue: string = typeof value;

    if (typeof value === 'number') {           // Is it a number?
        result = value + value;                // OK
    } else if (typeof value === 'string') {    // Is it a string?
        result = value + value;                // OK
    }

    console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);

    return result
}

let numberValue = identity<number, string>(100, 'Hello');
let stringValue = identity<string, string>('100', 'Hello');

console.log(numberValue);       // Returns 200
console.log(stringValue);       // Returns 100100
```
`Note: We can only use a typeof type guard to check the primitive types string, number, bigint, function, boolean, symbol, object, and undefined. To check the type of a class, use an instanceof type guard.`

</details>

<details>
<summary>Implement generics with custom types and classes</summary>

The most powerful uses of generics come from uses with classes and custom types.

This example has a base class called `Car` and two subclasses, `ElectricCar` and `Truck`. The `accelerate` function accepts a generic instance of `Car` and then returns it. By telling the `accelerate` function that T must extend `Car`, TypeScript knows which functions and properties you can call within the function. The generic also returns the specific type of car (`ElectricCar` or `Truck`) passed into the function, rather than a non-specific `Car` object.

```typescript
class Car {
    make: string = 'Generic Car';
    doors: number = 4;
}
class ElectricCar extends Car {
    make = 'Electric Car';
    doors = 4
}
class Truck extends Car {
    make = 'Truck';
    doors = 2
}
function accelerate<T extends Car> (car: T): T {
    console.log(`All ${car.doors} doors are closed.`);
    console.log(`The ${car.make} is now accelerating!`)
    return car
}

let myElectricCar = new ElectricCar;
accelerate<ElectricCar>(myElectricCar);
let myTruck = new Truck;
accelerate<Truck>(myTruck);
```
The output to the console is:

```typescript
"All 4 doors are closed."
"The Electric Car is now accelerating!"
"All 2 doors are closed."
"The Truck is now accelerating!"
```

`Note: Generic constraints can not only be applied to native types, but also to classes. We can do this by defining an interface and then using the extend keyword with the type variable to extend it`

</details>

<details>
<summary>Lab - Declare a class by using a generic</summary>

```typescript
/*  Module 6: DGenerics in TypeScript
    Lab Start */
```
```typescript
/*  DataStore is a utility function that can store up to 10 string values in an array. 
    Rewrite the DataStore class so the array can store items of any type.

    TODO: Add and apply a type variable. */
class DataStore<T> {

    private _data: Array<T> = new Array(10);
    
    AddOrUpdate(index: number, item: T) {
        if(index >=0 && index <10) {
            this._data[index] = item;
        } else {
            alert('Index is greater than 10')
        }
    }
    GetData(index: number) {
        if(index >=0 && index < 10) {
            return this._data[index];
        } else {
            return
        }
    }
}

let cities = new DataStore();

cities.AddOrUpdate(0, "Mumbai");
cities.AddOrUpdate(1, "Chicago");
cities.AddOrUpdate(11, "London");       // item not added

console.log(cities.GetData(1));         // returns 'Chicago'
console.log(cities.GetData(12));        // returns 'undefined'

// TODO Test items as numbers.
let empIDs = new DataStore<number>();
empIDs.AddOrUpdate(0,50)
empIDs.AddOrUpdate(1, 65);
empIDs.AddOrUpdate(2, 89);
console.log(empIDs.GetData(0)); 
// TODO Test items as objects.
type Pets = {
  name: string;
  breed: string;
  age: number
}

let pets = new DataStore<Pets>();
pets.AddOrUpdate(0, { name: 'Rex', breed: 'Golden Retriever', age: 5})
pets.AddOrUpdate(1, { name: 'Sparky', breed: 'Jack Russell Terrier', age: 3});
console.log(pets.GetData(1)); // returns { name: 'Sparky', breed: 'Jack Russell Terrier', age: 3 }
```
</details>


- [ ] 2. [Generics](./exercises/e00/desc) exercise, using `Typescript`
- [x] 3. ✨ 5th Core Challenge, update your resume [here](https://corecode.notion.site/CV-or-Resume-Boost-9092fff9f9cf4944a7c1717b11b09223)
