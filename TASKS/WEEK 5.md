<h1 align="center">End Of Month & Typescript - Week 5</h1>

## Week goal 🏁

<p>Learn about Typescript fundamentals</p>

## Week challenges (Monday) 💻

1. Time to catch up ⏱️ or do extra work ⭐

## Week challenges (Tuesday) 💻

1. Time to catch up ⏱️ or do extra work ⭐

## Week challenges (Wednesday) 💻

- [x] 1. Learn about [FP vs OOP](https://www.youtube.com/watch?v=08CWw_VD45w)

`Functional programming:` is the way of programming that tries to avoid changing states and changing data. In function-oriented programming, the output of a function should always be the same given similar inputs.

This is because the outputs of functions in functional programming depend only on the function's arguments, and what happens behind the scenes isn't magic. This eliminates the side effects of code changes.

Problems with functional programming:

1. Is not free from flaws.
2. It takes a different mindset to approach your code from a functional point of view.
3. Functional programming is all about data manipulation. Converting a real-world scenario to just data can take some extra thought.

`Object-oriented programming:` is a paradigm in which the program uses objects to represent what you are programming (often real-world objects). These objects could be data structures. Objects store internal information about them in attributes. Attributes are manipulated by methods or functions that are programmed into the objects themselves.

There are a few problems with object-oriented programming:

1. It is well known that it is not so reusable.
2. As some of your functions depend on the class that is using it, it is complicated to use some functions with other classes.
3. It is typically less efficient and more complex to maintain.
4. Some objects have large architecture-oriented designs that can be extremely complex to maintain.

`Conclusion`

So to conclude there is no objective winner of the debate we cannot simply say one is better than the other both styles of programming excel in their own ways and each one has its advantages and disadvantages over the other.

Both programming concepts have the goal of creating easily understandable, error-free programs that can be developed quickly. Both concepts have different methods to store the data and how to manipulate the data.

In object-oriented programming, you store data in object attributes and have functions that work for that object and perform the manipulation.

In functional programming, we see everything as a data transformation. Data is not stored in objects, it is transformed by creating new versions of that data and manipulating it using one of many functions.

- [x] 2. Learn about [Fundamental Concepts of Object Oriented Programming](https://www.youtube.com/watch?v=m_MQYyJpIjg)
- [x] 3. Read bout [OOP](https://medium.com/from-the-scratch/oop-everything-you-need-to-know-about-object-oriented-programming-aee3c18e281b)

`Object Oriented Programming (OOP):`

Object-oriented programming is a form of programming that allows programmers to think as if they are working with real-life entities (a thing with a distinct and independent existence) or objects.

`Basic terminologies:`

`Object:` it is a dedicated and continuous block of memory allocated to store information like variables, methods or functions etc.

`Class:` It is a template or blue print about the capability of what an object can do.

`Method:` The behaviours of a class. It tells what a method can do.

`Instance:` The instance is a block of memory, which contains the reference to an object. In other words, the instance will hold the address of the starting memory block where the object is stored.

`Object-oriented programming concepts:`

`Encapsulation:` is a mechanism of wrapping the data (instance variables) and code acting on the data (methods) together as a single unit like a Class.

The main purpose of encapsulation is you would have full control on data by using the code.

Encapsulation can be described as a protective barrier that prevents the code and data being randomly accessed by other code defined outside the class. Access to the data and code is tightly controlled by a class.

`Abstraction:` Abstraction allows you to highlight the most representative part of something, ignoring details to focus on the main thing.

`Polymorphism:` is the characteristic of being able to assign a different meaning or usage to something in different contexts — specifically, to allow an entity such as a function, or an object to have more than one form.

`Inheritance:` Inheritance can be defined as the process where one class acquires the properties (methods and fields) of another.

## Week challenges (Thursday) 💻

- [x] 1. [Get started with TypeScript](https://docs.microsoft.com/en-us/learn/modules/typescript-get-started/) guided exercise, using `Typescript`

`¿What is TypeScript?`

TypeScript is an open-source language that was developed by Microsoft. It is a superset of JavaScript, which means that you can continue to use the JavaScript skills you've already developed and add certain features that were previously unavailable to you.

`Compile a TypeScript file`

TypeScript is a strict superset of ECMAScript 2015 (ECMAScript 6 or ES6). All JavaScript code is also TypeScript code, and a TypeScript program can seamlessly consume JavaScript. In fact, you can convert a JavaScript file to a TypeScript file by simply renaming the extension from .js to .ts.

However, not all TypeScript code is JavaScript code. This is because TypeScript adds new syntax to JavaScript, which makes JavaScript easier to read and implements some features, such as static typing. Although TypeScript code makes development easier and less error-prone, browsers and most other runtimes do not support TypeScript natively. You can transform TypeScript code into JavaScript code using the TypeScript compiler, or you can use a TypeScript-compatible transpiler, such as Babel , swc , or Sucrase . This process removes TypeScript-specific code. Additionally, it generates a clean JavaScript file that you can run from your web pages and is cross-browser compatible.

You run the TypeScript compiler at the command prompt by using the `tsc` command. When you run `tsc` without additional parameters, it compiles all the .ts files in the current folder and generates a .js file for each one.

You can also compile a specific file. For example, to compile a TypeScript file named utility_functions.ts, enter `tsc utility_functions.ts`.

If there are no compiler errors, the `tsc` command generates a JavaScript file named utility_functions.js.

If the compiler finds errors in the code, it displays them in the command window. Fix the errors in the TypeScript file, and then rerun the `tsc` command.

-[ ] 3. ✨Complete your 3rd [**Core Challenge**](https://corecode.notion.site/GitHub-Boost-Guide-167914056cff4522886a78756f659e47). This is one of the requirements for the certification, where you'll boost your dev professional-brand.
