<h1 align="center">Introduction to programming & Javascript - Week 1</h1>

## Week goal 🏁

<p>Learn about the basics of programming and start knowing Javascript</p>

## Week challenges (Tuesday) 💻

1. Base on [this reading](https://www.freecodecamp.org/news/compiled-versus-interpreted-languages/) and [this video](https://www.youtube.com/watch?v=I1f45REi3k4), create an explanation about `Interpreted And Compiled Programming Languages` in your README

`Compiled languages:` they are those that require a compiler so that a written program can be executed, the compiler is a program that takes the source code and translates it in such a way that it results in an executable file which is now written in machine language that is, in ones and zeros or better known as binary code.

`Interpreted languages:` They are a little simpler, in these languages an interpreter is needed so that the written source code can be executed, what the interpreter does is take the file and go line by line translating that language to the machine code, but at runtime.

2. Is Java compiled or interpreted, or both?, check the sources and answer the question in your README

The answer is both. In Java, the compiler is in charge of translating the source code of a program into an intermediate code called bytecode that is independent of the platform on which it works and that is executed by the Java interpreter that is part of the Java Virtual Machine ( JVM).

Modern JVMs use a technique called Just In Time (JIT) compilation to compile bytecode into native instructions understood by the hardware CPU on the fly at run time.

3. Pseudocode Currency Converter exercise

`Description of the exercise`

You have been selected to develop the algorithm that will be used to convert dollars (USD) to bitcoin (BTC), for this the first thing you must do is deliver a pseudocode with the algorithm to be developed, in this way you can explain in a better way to the team what will be the required operation. The main idea is to have a website where the user will be asked to enter the amount to convert.

`Solution`

```assembly
1. STAR  

2. USD <-- GET 

3. BTCPrice <-- GET 

4. BTC <-- USD * BTCPrice  

5. PRINT BTC 

6. END 
```
4. Learn about High and Low level languages

`High-level languages:` is one that is user-oriented in that it has been designed to make it straightforward for a programmer to convert an algorithm into program code. They are languages independent of the architecture of the computer. So, in principle, a program written in a high-level language can be migrated from one machine to another without any problem.

These languages allow the programmer to completely forget about the inner workings of the machine/s for which they are designing the program. They just need a translator who understands the source code as well as the characteristics of the machine.

Examples of high level languages we have: Java, C#, Python, JavaScript.

`Low-level languages:` is machine-oriented. Low-level programs are expressed in terms of the machine operations that must be performed to carry out a task. This makes writing programs more difficult, as the algorithm must be specified in terms of the capabilities and specifications of the processor. Low-level languages are named for the processor (or processor family) that they are designed for, and are often referred to as assembly language or machine code.

## Week challenges (Wednesday) 💻

1. Your date of birth in the matrix? exercise

`Description`

Your team has just seen the movie "Matrix" and you have been asked, how the number of your year of birth would be written in binary. You must learn how to translate your date of birth into binary and show your team. (Do not use a webpage or a tool to convert your date of birth)

`Solution`

My year of birth is: 2002

2002 in binary code is:

|   OPERATIONS  |   RESULTS   |  RESIDUE  |
|     :---:     |     :---:   |   :---:   |
| 2002 / 2      | 1.001       |  0        |
| 1.001 / 2     | 500,5       |  1        |
| 500/ 2        | 250         |  0        |
| 250 / 2       | 125         |  0        | 
| 125 / 2       | 62,5        |  1        |     
| 62 / 2        | 31          |  0        |
| 31 / 2        | 15,5        |  1        |
| 15 / 2        | 7,5         |  1        |
| 7 / 2         | 3,5         |  1        |
| 3 / 2         | 1,5         |  1        | 
| 1 / 2         | 0,5         |  1        | 


`2002 = 11111010010`


My birthday date is: 18012002 

18012002 in binary code is : 


|    OPERATIONS  |    RESULTS     |  RESIDUE     |
| :---:          |     :---:      |         :---:|
|  18012002 / 2  | 9.006.001      |  0           |
| 9.006.001 / 2  | 4.503.000,5    |  1           |
| 4.503.000 / 2  | 2.251.500      |  0           |
| 2.251.500 / 2  | 1.125.750      |  0           | 
| 1.125.750 / 2  | 562.875        |  0           |     
| 562.875 / 2    | 281.437,5      |  1           |
| 281.437 / 2    | 140.718,5      |  1           |
| 140.718 / 2    | 70.359         |  0           |
| 70.359 / 2     | 35.179,5       |  1           |
| 35.179 / 2     | 17.589,5       |  1           |
| 17.589 / 2     | 8.794,5        |  1           |
| 8.794 / 2      | 4.397          |  0           |
| 4.397 / 2      | 2.198,5        |  1           |
| 2.198 / 2      | 1.099          |  0           |
| 1.099 / 2      | 549,5          |  1           |
| 549 / 2        | 274,5          |  1           |
| 274 / 2        | 137            |  0           |
| 137 / 2        | 68,5           |  1           |
| 68 / 2         | 34             |  0           | 
| 34 / 2         | 17             |  0           |
| 17 / 2         | 8,5            |  1           |
| 8 / 2          | 4              |  0           |
| 4 / 2          | 2              |  0           |
| 2 / 2          | 1              |  0           |
| 1 / 2          | 0,5            |  1           |


`18012002 = 1000100101101011101100010` 


2. MIPS exercise

`Description`

Based on the guide #guide and the examples #examples of the low-level language, create the following

1. Create a program that adds any two given numbers provided by the user

`Solution`
```assembly
.data 


          number1: .asciiz "\nIngrese el primer numero:"   
          number2: .asciiz "\nIngrese el segundo numero:"    

.text  

         main: 

         li $v0, 4 
         la $a0, number1          

         syscall  

         li $v0, 5 

         syscall  

         move $t0, $v0 

         li $v0, 4 
         la $a0, number2 
         
         syscall  
         
         li $v0, 5 
         
         syscall             

         move $t1 , $v0            

         li $v0, 1 

         move $a0, $t0 
          
         syscall 
```

2. Create a program that displays your name
`Solution`

```assembly
.data 

        message: .asciiz "\nJose Miguel\n" 
        
 .text 

        main: 

              li $v0, 4 
              la $a0, message 

              syscall 

 ```


## Week challenges (Thursday) 💻

1. Print special numbers exercise

`Description`

In this exercise you must use an iterative flow control to be able to print all the even numbers in the range of numbers from 0 to 100. Remember that you should not print each number, you should use a flow control structure to perform the exercise

`Solution`

```javascript
let pares = '';

for (let i = 2; i <=100; i+=2) {
  pares = pares + " " + i;
}

console.log(pares);
```

2. Bad Code exercise
`Description`

The code shown below is not working in the right way, as a task you must find the error made by the developer who programmed this code and correct it, for this exercise you must explain what the error is and place the correct code
```javascript
var cond = false;

if ((cond = true)) {
  console.log('The cond variable is true');
} else {
  console.log('The cond variable is false');
}
```

`Solution`

The error is in the following line:
```javascript
if ((cond = true))
```
The person was assigning and not asking, he should use "==" and not "=". To solve it we remove a couple of parentheses `()` and add double `==` to indicate that we are asking.
```javascript
var cond = false;

if (cond == true) {
  console.log('The cond variable is true');
} else {
  console.log('The cond variable is false');
}
```
3. Bad Code 2 exercise

 `Description`

You must create the code that follows the following logic, if the given number is 100, take this number as special and show the following message: "This is a special number!", but if the number is less than 1000, multiple of 10 and different from 100, you must show the following message: "This number is almost special". if none of the given conditions are met show the following message: "Just a regular number". Another developer was trying to program the logic, but apparently couldn't, you need to fix the code to work properly

```javascript
var n = 100;

if (n == 100) {
  console.log('This is a special number!');
}
if (n < 1000) {
  console.log('');
} else {
  console.log('Just a regular number');
}
if (n % 10 == 0) {
  console.log('This number is multiple of 10');
}
```

`Solution`
```javascript
var n = 100;

if (n == 100) {
  console.log('This is a special number!');
}
else if (n <= 1000 && n % 10 == 0 && n != 100 ) {
  console.log('This number is almost special');
} else {
  console.log('Just a regular number');
}
```
