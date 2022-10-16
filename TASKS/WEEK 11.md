<h1 align="center">Node - Week 11</h1>

## Week goal 🏁

<p>Learn about Node.JS and its capabilities</p>

## Week Challenges (Monday) 💻

1. Time to catch up ⏱️ or play with the React project

## Week Challenges (Tuesday) 🐣

- [x] 1. Node.JS Core Understanding Learning Exercise 🧠

<details> 
<summary>1. What is Node.JS?</summary>

 Node.js is an open source, cross-platform runtime environment used to run web applications outside of the browser.

It is used for server-side programming, and primarily deployed for non-blocking, event-driven servers, such as traditional web sites and back-end API services.
</details>

<details> 
<summary>2. What problem does Node.JS solve?</summary>

Node.js is an excellent solution for developing microservices and creating easy-to-use APIs to connect them. In particular, the Node.js repository features Express and Koa frameworks, which make it easy to mount several server instances for each microservice and design routing addresses for them.
</details> 

<details>
<summary>3. What is the V8 Javascript Engine?</summary>

Chrome V8 is an engine that runs JavaScript code. JavaScript was initially written so that it could be executed by web browsers. Chrome V8, or simply V8, can run JavaScript code both inside and outside of a browser.
</details>

<details>
<summary>4. Is Node.JS really necessary in the Development ecosystem?</summary>

Node.js if necessary in our development ecosystem. There are cases in which we need to do many things at the same time and especially many operations at the same time such as databases, file access, etc.

Some advantages when developing with node.js we have:

- It is especially good for realtime applications, which need to maintain a persistent connection between the browser and the server.

- The compilation of Node.js is done at runtime, Just In Time (JIT), this brings with it a greater optimization of the functions that are called the most times.

- We can easily expand our code by adding modules thanks to the Node Package Manager (NPM).

- High performance in projects where we need execution in real time.

- In startups or small teams we can make front-end, back-end and even a mobile application with the same language.
</details>

<details>

<summary>5. What is the difference between Node.JS and any other browser?</summary>

Both the browser and Node.js use JavaScript as their programming language.

It should be noted that building an app that runs in a browser is completely different than building a Node.js app.

Although they both use Javascript as their development language, we can see some key differences that make their software development experiences very different.

Node.js applications bring with them a great advantage: the comfort of programming everything, frontend and backend, in the same language, since learning a new programming language in depth and completely is somewhat complicated.

Between Node.js and the browser, what changes is the ecosystem.

- In the browser, most of the time what we are doing is interacting with the DOM or other APIs of the web platform such as cookies.

- With Node.js it's server side, we don't have DOM, we don't need cookies. Cookies are primarily implemented to track users or save user information. We are on the server side, with direct access to the database or storage resources.

- In Node.js we control the environment. Unless we're building an open source application that anyone can deploy anywhere.

- Compared to the browser environment, where you don't have the luxury of choosing which browser your visitors will use, it's very convenient.

- Node.js supports the CommonJS and ES module systems, while in the browser we're starting to see the ES Modules standard being implemented.
</details>

<details>
<summary>6. What is NVM and Why is it useful for Node.JS developers?</summary>

Using nvm (Node.js Version Manager) makes it easier to install and manage multiple versions of Node.js on a single local environment.

NVM allows users to:

- Locally download any of the remote Long Term Support (LTS) versions of Node.js with a simple command.

- Easily switch between multiple versions of Node.js, right from the command line.

- Set up aliases to switch between different downloaded versions of Node.js with ease.
</details>

- [x] 2. [Node.JS Module System Core Understanding](./exercises/e00/NODE-MS.md) Learning Exercise 🧠

<details>
<summary>1. What is a Javascript Module?</summary>
Module is a file that contains code to perform a specific task. A module may contain variables, functions, classes etc. 

Considerations:

- Should be independent, specialized, and reusable.

- In JavaScript, we use the `import` and `export` keywords to share and receive functionality respectively across different modules.

- The ``default` keyword is used to specify a function, object, variable, or class that we want to be a first-choice import.
</details>

<details>
<summary>2. Why are Javascript Modules necessary?</summary>

They are necessary to better organize and structure our code base, we can also use them to break large programs into smaller, more manageable and more independent pieces of code that carry out one or more related tasks.
</details>

<details>
<summary>3. What module standards are available in Node.JS?</summary>

Node.js implements the CommonJS module standard, also supports the ECMAScript module standard used by browsers and other JavaScript runtimes.
</details>

<details>
<summary>4. What are the differences between ESModules and CommonJS modules?</summary>

`File extensions:`

In all of our ES module imports we explicitly add the file extension to all file imports (it's required for ES modules). NodeJS distinguishes between CommonJS modules and ES modules through the file extension. By default, files with the `.js`extension will be treated as CommonJS modules, while files with the `.mjs` extension will be treated as ES modules.

ES Modules can import CommonJS modules, but CommonJS modules cannot import ES modules. You can't import `.mjs` files from `.js` files. This is due to the different nature of the two systems.

`Dynamic vs Static`

The two module systems differ in the way imports and exports are handled.

CommonJS imports are resolved dynamically at runtime. The `require()` function is simply executed at the moment our code is executed.

With ES modules, imports are static, meaning they are executed at parse time. The advantage of this is that bugs can be caught in advance and development tools can better help us write valid code.
</details>

<details>
<summary>5. Which types of modules exist in Node.JS?</summary>

Node.js includes three types of modules:

`Core Modules:` Built-in modules of node.js that are part of nodejs and come with the Node.js installation process.

`Local Modules:`These are modules that we wrote ourselves, are part of our actual code base, and are checked into version control. Local modules are how to reuse code in our project..

`Third Party Modules:`Modules that are available online and are installed using the npm. Examples of third party modules are express, mongoose.

</details>



- [x] 3. Node.JS Module System Practice 💻

[soluction](https://github.com/JoseMiguel22/core-code-from-scratch-readme/tree/main/migjo-node) 

- [ ] 4. Client-Server Model Learning Exercise 🧠
<details>
<summary>1. What is a Server?</summary>
The server is a program that receives a request, performs the required service, and returns the results in the form of a response.
</details>

<details>
<summary>2. Why is a Client?</summary>
because the client refers to a plaintiff or applicant for services.
</details>

<details>
<summary>3. Is a server just another physical computer?</summary>

   - Why do we refer to a certain class of applications as Servers?

   - What is the difference?
</details>

<details>
<summary>4. Is there any similarity between human communication and the client-server model?</summary>
</details>

<details>
<summary>5. Is the client-server model applicable only to the Web?</summary>
   - Can you mention any other example of this model outside the Web?

</details>

## Week Challenges (Wednesday) 🐤

- [x] 1. APIs Core Understanding Learning Exercise 🧠

<details>
<summary>1. What is an API?</summary>

API stands for “application programming interface”. APIs are mechanisms that allow two software components to communicate with each other using a set of definitions and protocols.
</details>

<details>
<summary>2. What is a Protocol?</summary>
 
 A protocol is a set of rules for formatting and processing data. Network protocols are like a lingua franca for computers. Computers on a network can use very different software and hardware; however, the use of protocols allows them to communicate with each other.
</details>

<details>
<summary>3. Is the term API only applicable to the communication of programs over the Internet?</summary>

No, since APIs provide a way for one application to interact with another. regardless of whether or not they are connected to the web.
</details>

<details>
<summary>4. Why is structured communication between two programs important?</summary>

It is important that they maintain communication because this gives the programs a variety of forms and functionalities for their proper functioning and to make them dynamic and interactive.

   - Do we humans use APIs when communicating without technology?

 We could say yes, because the APIs fulfill the function of being an intermediary between the client and the server, in this case an API to communicate without technology could be to communicate through family letters, our API would be the postman since he would do the delivery of the letters and thus maintain communication.
</details>

<details>
<summary>5. Is an API just another program or a standard?</summary>

APIs are standards (used as a pattern, model or reference point) for the exchange of application data.
</details>

<details>
<summary>6. Do you know any API? Can you list at least 5 examples of APIs?</summary>

- Google Maps
- Log-in Using XYZ
- Weather Apps
- Twitter Bots
- Amazon - Alexa
</details>

- [x] 2. From JSON to REST Learning Exercise 🧠

<details>
<summary>1. What is HTTP?</summary>

HTTP stands for Hypertext Transfer Protocol. It is a set of formally defined rules for communication between a client and a server.
</details>

<details>
<summary>2. What is JSON?</summary>

JSON stands for JavaScript Object Notation. Is a lightweight format for storing and transporting data,  is often used when data is sent from a server to a web page and is "self-describing" and easy to understand.

   - Is JSON the same as a plain Javascript object?

The JSON format is syntactically identical in its simplicity to the code to create objects in JavaScript, but they are not the same. The JSON format is just text that facilitates the exchange of data between devices such as Clients and Servers.
</details>

<details>
<summary>3. What is REST?</summary>

REST stands for Representational State Transfer, it is any interface between systems that uses HTTP to obtain data or perform operations on that data in all possible formats, such as XML and JSON.

   - Is REST a programming language, framework, technology, or architecture pattern?

REST is an architectural pattern, because it describes a uniform interface between physically separated components.
</details>

<details>
<summary>4. What is a Resource in REST?</summary>

 It is anything that is accessed through the URL that we provide (The URL is not a resource, it is a label that identifies the resource, it is if you will, the name of the resource).

   - What is a resource identifier?

Uniform Resource Identifier (URI) it is a string of characters that identifies the resources.
</details>

<details>
<summary>5. What is an HTTP method?</summary>

 It is a request to indicate the action that you want to perform for a given resource.

   - What HTTP methods does REST use within its architecture rules?

GET retrieves or gets a representation of the resource at the specified URI.

POST creates a new resource at the specified URI.

PUT creates or replaces the resource at the specified URI.

PATCH perform a partial update of a resource

DELETE removes the resource at the specified URI.

HEAD This method is used to obtain information about a given resource without returning the record.

   - Why do we use HTTP methods in REST and how do they relate to resources?

 Because through the methods we indicate to the server the way in which it should treat a specific request, defining the action that will be carried out on a certain resource.

 </details>

 <details>
<summary>6. Is REST the same as HTTP?</summary>

They are not the same, REST refers to a set of rules that when followed allow us to create a distributed application that has a specific set of desirable restrictions, while HTTP is a well-defined protocol used for communication, generally used to communicate with Internet resources or any application with a web browser client.

</details>

- [x] 3. REST API Clients Learning Exercise 🧠

- [x] 1. Install Postman in your computer, follow [this](https://learning.postman.com/docs/getting-started/installation-and-updates/) guide

- [x] 2. Watch [this](https://www.youtube.com/watch?v=VywxIQ2ZXw4) course about how to use Postman to interact with APIs

<details>
 <summary>3. Answer the questions:</summary>

   - Postman only works with REST APIs?

   No, Postman supports different APIs.

   - Is there an alternative to Postman?

   If we have a Swagger UI, Insomnia REST Client, Paw, Apigee and cURL are the most popular alternatives to Postman.
</details>

- [x] 4. Express.JS Core Understanding Learning Exercise 🧠

1. Read about the Chain of Responsibility design pattern

`Chain of Responsibility` is a behavioral design pattern that allows you to pass requests along a chain of handlers.

2. Express JS Hello World:

[Directory](https://github.com/JoseMiguel22/core-code-from-scratch-readme/tree/main/myapp-express)
```javascript
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
```

## Week challenges (Thursday) 💻

- [x] 1. Forrest Gump Ping-Pong API 🏓

[Directory](https://github.com/JoseMiguel22/core-code-from-scratch-readme/tree/main/API_Ping-Pong)

```javascript
const express = require('express')
const api = express()
const port = 3001

api.get('/ping', (req, res) => {
    res.send({ message: "pong"})
})

api.get('/pong', (req, res) => {
    res.send({ message: "ping"})
})

api.listen(port, () => {
    console.log("API IS RUNNING\n")
})

```
![PING](https://user-images.githubusercontent.com/108826299/196018709-bdd6e41d-6fe4-4636-a722-cd5fe64f9bb7.png)
![PONG](https://user-images.githubusercontent.com/108826299/196018713-57db2a54-cfd2-44cb-b2b3-1b8a15e01572.png)



- [x] 2. Delayed Response API ⏳

[Directory](https://github.com/JoseMiguel22/core-code-from-scratch-readme/tree/main/API_delayed_response)


```javascript
const express = require('express')
const api = express()
const port = 3002

api.get('/delay/:time', (req, res) => {
  const time = req.params;

  console.log(time);
  setTimeout(() => {
    res.send({ message: "This a delayed response"})
  }, time);
})


api.listen(port, () => {
    console.log(`listening on port ${port}`)
})
```
![delay](https://user-images.githubusercontent.com/108826299/196018816-61e5cf35-900c-48f0-9888-6e9f2dda24fc.png)
