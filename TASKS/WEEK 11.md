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



- [ ] 3. Node.JS Module System Practice 💻

- [ ] 4. Client-Server Model Learning Exercise 🧠

## Week Challenges (Wednesday) 🐤

- [ ] 1. APIs Core Understanding Learning Exercise 🧠
- [ ] 2. From JSON to REST Learning Exercise 🧠
- [ ] 3. REST API Clients Learning Exercise 🧠
- [ ] 4. Express.JS Core Understanding Learning Exercise 🧠

## Week challenges (Thursday) 💻

- [ ] 1. Forrest Gump Ping-Pong API 🏓
- [ ] 2. Delayed Response API ⏳
