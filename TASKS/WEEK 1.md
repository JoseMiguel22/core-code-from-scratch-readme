<h1 align="center">Introduction to programming & Javascript - Week 1</h1>

## Week challenges (Tuesday) 💻

1. Base on [this reading](https://www.freecodecamp.org/news/compiled-versus-interpreted-languages/) and [this video](https://www.youtube.com/watch?v=I1f45REi3k4), create an explanation about `Interpreted And Compiled Programming Languages` in your README
```
Compiled languages: they are those that require a compiler so that a written program can be executed, the compiler is a program that takes the source code and translates it in such a way that it results in an executable file which is now written in machine language that is, in ones and zeros or better known as binary code.
```
```
Interpreted languages: They are a little simpler, in these languages an interpreter is needed so that the written source code can be executed, what the interpreter does is take the file and go line by line translating that language to the machine code, but at runtime.
```

2. Is Java compiled or interpreted, or both?, check the sources and answer the question in your README
```
The answer is both. In Java, the compiler is in charge of translating the source code of a program into an intermediate code called bytecode that is independent of the platform on which it works and that is executed by the Java interpreter that is part of the Java Virtual Machine ( JVM).

Modern JVMs use a technique called Just In Time (JIT) compilation to compile bytecode into native instructions understood by the hardware CPU on the fly at run time.
 ```
3. [Pseudocode Currency Converter] exercise

## Description of the exercise

You have been selected to develop the algorithm that will be used to convert dollars (USD) to bitcoin (BTC), for this the first thing you must do is deliver a pseudocode with the algorithm to be developed, in this way you can explain in a better way to the team what will be the required operation. The main idea is to have a website where the user will be asked to enter the amount to convert.

## Exercise development:

```
1. STAR  

2. USD <-- GET 

3. BTCPrice <-- GET 

4. BTC <-- USD * BTCPrice  

5. PRINT BTC 

6. END 
```

## Week challenges (Wednesday) 💻

1. [Your date of birth in the matrix?](./exercises/e01/desc) exercise

## Description

Your team has just seen the movie "Matrix" and you have been asked, how the number of your year of birth would be written in binary. You must learn how to translate your date of birth into binary and show your team. (Do not use a webpage or a tool to convert your date of birth)

## Exercise development:

My birthday date is 18/01/2002 

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

```
18012002 = 1000100101101011101100010 
```

3. [MIPS](./exercises/e02/desc) exercise

## Week challenges (Thursday) 💻

1. [Print special numbers](./exercises/e03/desc) exercise
2. [Bad Code](./exercises/e04/desc) exercise
3. [Bad Code 2](./exercises/e05/desc) exercise
4. [Follow Git Course](https://www.udacity.com/course/version-control-with-git--ud123)

## Week links 🔗

1. [JSBIN](https://jsbin.com/mafowaceyi/edit?js,console)

## Session links 🔗

## HTML Help 📄

1. [Introduction to HTML](https://developer.mozilla.org/en-US/docs/Glossary/HTML)
2. [Getting started with HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
3. [Metadata in HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
4. [Semantic HTML](https://www.w3schools.com/html/html5_semantic_elements.asp)
