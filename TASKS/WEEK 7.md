<h1 align="center">Typescript - Week 7</h1>

## Week goal 🏁

<p>Learn about interfaces, data modifiers and function types, along with how to interact with the console using Typescript</p>

## Week challenges (Monday) 💻


- [x] 1. Watch [Object Oriented Programming - The Four Pillars of OOP](https://www.youtube.com/watch?v=1ONhXmQuWP8)
- [x] 2. [Readme - OOP](https://github.com/JoseMiguel22/core-code-from-scratch-readme/blob/main/TASKS/OOP%20glossary.md) glossary

## Week challenges (Tuesday) 💻

- [x] 1. [Input/Output](./exercises/e00/desc) playground, using `Typescript`

# Input

![Single Input](https://user-images.githubusercontent.com/108826299/196098394-130def4a-c870-4be3-af19-a5cb28a9f444.gif)
</details>

# Form
  
![Form Input](https://user-images.githubusercontent.com/108826299/196098406-bdac6a38-8969-449d-8f43-8e61bee079c4.gif)

  
# Select
  
![select input](https://user-images.githubusercontent.com/108826299/196098425-50404c15-ae56-4949-8c3f-1c75c910ab70.gif)


# Selec by ID
  
![select by id input](https://user-images.githubusercontent.com/108826299/196098447-30b79093-2f27-4d1a-9b28-8d670f8687b9.gif)

  
# Confirn
  
![confirn input](https://user-images.githubusercontent.com/108826299/196098468-2d544e9a-0daa-4043-b71a-157f8a171cf2.gif)


## Week challenges (Wednesday) 💻

- [x] 1. [Build Tower](./exercises/e04/desc) exercise, using `Typescript`

`Solution`
```typescript
export const towerBuilder = (nFloors: number): string[] => {
  if (nFloors === 1) return ['*'];
  const tower: string[] = [];
  const maxNumber = 2 * nFloors - 1;
  for (let i = 1; i <= nFloors; i++) {
    tower.push(
      `${' '.repeat(nFloors - i)}${'*'.repeat(2 * i - 1)}${' '.repeat(
        nFloors - i
      )}`
    );
  }
  return tower;
};
```
- [x] 2. [Meeting](./exercises/e05/desc) exercise, using `Typescript`

`Solution`
```typescript
export function meeting(s: string): string {
  return s
    .toUpperCase()
    .split(';')
    .map((n: string) => '(' + n.split(':').reverse().join(', ') + ')')
    .sort()
    .join('');
}
```
## Week challenges (Thursday) 💻

- [x] 1. [Interfaces](https://docs.microsoft.com/en-us/learn/modules/typescript-implement-interfaces/) guided exercise, using `Typescript`

<details>
<summary>Overview of interfaces in TypeScript</summary>

`What is an interface`

interfaces can be used to describe an object, by naming and parameterizing the object's types, and to compose existing named object types into new ones.

Interfaces have no run-time representation; they are purely a compile-time construct. Interfaces are particularly useful for documenting and validating the required shape of properties, objects passed as parameters, and objects returned from functions.


`Reasons for using an interface in TypeScript`

- Make abbreviated names for the various common usages. You can still benefit from Intellisense and type checking even with a basic interface like the one described in the previous example.

- Because each object that implements the interface operates under the same type definitions, it encourages consistency among a group of objects. This could be helpful if you're working with a team of developers and want to ensure that the right values are applied to the properties, builders, or functions. As an illustration, objects that implement a network must implement all of the network's necessary components. The TypeScript compiler will then throw an error if all of the necessary parameters of the right type are not passed.

- Clarifying the function parameters and devolve types while describing the existing JavaScript API. When working with JavaScript libraries like jQuery, this is quite helpful. Without having to go back and read the documentation, an interface may provide you a clear understanding of what to expect from a function and what it will return.

`How is an interface different from a type alias?`

Type aliases can act like interfaces; however, there are some subtle differences. The key distinction is that a type alias cannot be reopened to add new properties whereas an interface is always extendable. Also, you can only describe a union or tuple using a type alias.
</details>

<details>
<summary>Other ways to use interfaces in Typescript</summary>

`Create indexable types`

Indexable types have an index signature that describes the type you can use to index into the object, along with the corresponding return types when indexing.


`Describe a JavaScript API using an interface`

We can use an interface to describe existing JavaScript APIs and clarify function parameters and return types. The interface provides you with a clear understanding of what an API is expecting and what it will return.
</details>

<details>
<summary>Lab - Use interfaces in TypeScript</summary>

```typescript
/* Module 3: Implement interfaces in TypeScript
   Lab Start  */
```

```typescript
/*  EXERCISE 1
    TODO: Declare the Loan interface. */
interface Loan {
    principal: number,
    interestRate: number
}

/*  TODO: Declare the ConventionalLoan interface. */

interface ConventionalLoan extends Loan {
    months: number
}
```
```typescript
/*Exercise 2 - Implement the interfaces */

/*  TODO: Update the calculateInterestOnlyLoanPayment function. */

function calculateInterestOnlyLoanPayment(loanTerms : Loan): string {
    // Calculates the monthly payment of an interest only loan
    let interest = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = loanTerms.principal * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}

/*  TODO: Update the calculateConventionalLoanPayment function. */

function calculateConventionalLoanPayment(loanTerms: ConventionalLoan): string {
    // Calculates the monthly payment of a conventional loan
    let interest: number = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment: number;
    payment = loanTerms.principal * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}

let interestOnlyPayment = calculateInterestOnlyLoanPayment({principal: 30000, interestRate: 5});
let conventionalPayment = calculateConventionalLoanPayment({principal: 30000, interestRate: 5, months: 180});

console.log(interestOnlyPayment);     //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalPayment);     //* Returns "The conventional loan payment is 237.24" 
```
</details>


- [x] 2. ✨Complete your 4th [**Core Challenge**](https://corecode.notion.site/Earn-your-SCRUM-certificate-8d9d0d40abaa4ee18c77c5a2cc1929b8). This is one of the requirements for the certification, where you'll boost your dev professional-brand.

