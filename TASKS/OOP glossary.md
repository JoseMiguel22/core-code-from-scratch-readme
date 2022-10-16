`key-words`

1. `Abstraction`

   It is the process by which all information that is not relevant in a particular context is discarded, emphasizing some of the details or properties of the objects. Abstraction consists of capturing the characteristics and functionalities that an object performs and these are represented in classes by means of attributes and methods of said class.

```typescript
   abstract class human {
 abstract getName(): string;


 printName() {
  console.log(`My name is ${this.getName()}`);
 }
}
```

2. `Inheritance`

    It is the mechanism by which a class allows inheriting the characteristics (attributes and methods) of another class.

    Inheritance allows you to define new classes based on existing ones in order to reuse code, thus generating a hierarchy of classes within an application. If a class derives from another, it inherits its attributes and methods and can add new attributes, methods or redefine the inherited ones.


 ```typescript
 class clothes{ 
  
  article: string;
  size: string| number;
  color: string;

  constructor(article:string, size: string | number, color:string){
    this.article = article;
    this.size = size;
    this.color = color;
    
  }

  getarticle(article:String): string {
    return `${article}.`
}
  getsize(size: string | number): string {
    return `this article is ${size}.`
}
  getcolor(color:String): string {
    return `this article is ${color}.`
}

}

class GucciClothes extends clothes{

  style: "Vintage" | "Punk" | "Modern";

  constructor(article:string, size: string | number, color:string, style:"Vintage" | "Punk" | "Modern"){
    super(article, size, color);
    this.style = style
  }

}


let t_shirt = new GucciClothes("t_shirt", "XL", "black", "Vintage")
```




3. `Polymorphism`

   It is the ability of certain languages to make it so that when sending the same message (or, in other words, calling the same method) from different objects, each of those objects can respond to that message (or call) differently.

 ```typescript
 class person {
  protected name: string;
  private id:number;
  private lastName: string;

  constructor(name: string, id:number, lastName: string){
    this.name = name;
    this.id = id;
    this.lastName = lastName;
  }

  info1():string {
    return this.name + '-' + this.id;
  }

  info2():string {
    return this.name + '-' + this.lastName;
  }
}

class student extends person {
  protected course: string;
  constructor(name:string, id:number,lastName:string,course: string){
    super(name, id, lastName);
    this.course = course;
  }

 
  info1():string {
    return `${super.info1()} is taking ${this.course} class.`
  }
}

class professor extends person {
  protected course: string;
  private salary: number;

  constructor(name:string, id: number,lastName:string, course: string, salary: number){
    super(name, id, lastName);
    this.course = course;
    this.salary = salary;
  }

info2():string {
    return `${super.info2()} teaches ${this.course}.`
  }
  }

let p1: person = new student("Jose", 1234, "Romero", "TypeScript")
console.log(p1.info1())

let p2: person = new professor ("Yosef",3456, "Maldonado", "TypeScript", 2400)
console.log(p2.info2())
 ```


4. `Encapsulation`

    It is when we limit the access or give a restricted access of a property to the elements that a member needs and not to any other.

    The most common element of encapsulation are classes, where we encapsulate and wrap both methods and properties.
    
 ```typescript
 class teacher {
  name: string;
  lastName: string;
  age: number;
  course: string;
  private _salary: number;

  constructor(name: string, lastName: string, age: number, course: string, _salary: number){
this.name = name;
this.lastName = lastName;
this.age = age;
this._salary = _salary;
  }


  get Salary():number{
    return this._salary;
  }

  Name():string{
    return this.name
  }

  LastName():string{
    return this.lastName
}

  Age():number{
    return this.age
  }

  Course():string{
    return this.course
  }
}
 ```

5. `Class`

   Description/template of an object. It consists of a series of methods and data that summarize the characteristics of an object. Defining classes allows you to work with reusable code. Since from a class you can create an instance and thus reuse the code written for it without having to rewrite the code for the instance. The instance takes the pattern of the parent class. However, the variables are independent.
   
 ```typescript
   class clothes{ 
  
  article: string;
  size: string| number;
  color: string;

  constructor(article:string, size: string | number, color:string){
    this.article = article;
    this.size = size;
    this.color = color;
    
  }

  getarticle(article:String): string {
    return `${article}.`
}
  getsize(size: string | number): string {
    return `this article is ${size}.`
}
  getcolor(color:String): string {
    return `this article is ${color}.`
}

}

```

6. `Object`

   It represents some real-life entity, that is, some of the unique objects that belong to the problem we are dealing with, and with which we can interact.

   Each object, just like the real-life entity it represents, has a state (that is, attributes with specific values) and behavior (that is, it has functionalities or knows how to perform specific actions).Informally, we can say that an object is any single element in the real world that can be interacted with.


 ```typescript
 
 interface Planet{
	name: string;
	galaxy: string;
	numberOfMoons: number;
	weight: number;
}

//object

let planet: Planet = {
    name : "Earth",
    galaxy :"milkyWay",
    numberOfMoons: 1,
    weight: 100000
}


console.log(planet.name); //Earth
 
 ```
 

7. `Instance`

   Any object that derives from another is called an instance. In this way, all objects are instances of some other, except for the Object class, which is the mother of all.

 ```typescript
 // class 

class clothes{ 
  
  article: string;
  size: string| number;
  color: string;

  constructor(article:string, size: string | number, color:string){
    this.article = article;
    this.size = size;
    this.color = color;
    
  }

  getarticle(article:String): string {
    return `${article}.`
}
  getsize(size: string | number): string {
    return `this article is ${size}.`
}
  getcolor(color:String): string {
    return `this article is ${color}.`
}

}


// Instances

let clothes1 = new clothes("t-shirt", "L", "blue")
let clothes2 = new clothes("pant", 34, "black")
let clothes3 = new clothes("hoodie", "M", "red")
```

8. `Interface`

   An interface is a contract between two entities, this means that an interface provides a service to a consumer class. Therefore, the interface only shows us the declaration of the methods it has, not its implementation, thus allowing its encapsulation.
   
 ```typescript
   interface Dessert {
  type:"cake"|"cookies"|"cupcakes";
  taste: "chocolate"|"strawberry"|"cookies and cream";
  toppings: string;
  units: number;
}

let dessert1: Dessert = {
  type:"cake",
  taste:"chocolate",
  toppings:"chips",
  units: 2
}
```

9. `Access Modifiers`

   Access modifiers allow the designer of a class to determine who accesses the data and member methods of a class. The access modifiers precede the declaration of a member element of the class (whether it is an attribute or a method) and there are four of them:

   - default or package-private (when nothing is written)

   - public

   - protected

   - private

 ```typescript
 class studenInfo{
  public name: string;
  protected notes: number;
  private parentsInfo: string[];

constructor(name: string, notes: number, parentsInfo: string[]){
  this.name = name;
  this.notes = notes;
  this.parentsInfo;
}

}
 ```
 
10. `Constructors`

   It is a set of instructions specially designed to initialize an instance of an object.
   
  ```typescript
   constructor(article:string, size: string | number, color:string){
    this.article = article;
    this.size = size;
    this.color = color;
    
  }
  ```

