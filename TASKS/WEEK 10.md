<h1 align="center">End Of Month & React - Week 10</h1>

## Week goal 🏁

<p>Learn about React</p>

## Week challenges (Monday) 💻

- [x] 1. Time to catch up ⏱️

## Week challenges (Tuesday) 💻

- [x] 1. Time to catch up ⏱️

## Week challenges (Wednesday) 💻

- [x] 1. Watch this [What Is React (React js) & Why Is It So Popular?](https://www.youtube.com/watch?v=N3AkSS5hXMA&ab_channel=ProgrammingwithMosh) video
- [x] 2. Watch this [Learn React](https://www.youtube.com/watch?v=hQAHSlTtcmY&ab_channel=WebDevSimplified) video

## Week challenges (Tuesday) 💻

- [x] 1. [React kata](https://www.codewars.com/kata/5a95947f4a6b342636000173)

`Solution`

```typescript
import React from 'react';

export const EggList = (props) => {
    const {eggs} = props
    const listItems = eggs.map((value, index) => <EasterEgg key={index} name={value}/>)
    return <ul>{listItems}</ul>
}

export const EasterEgg = (props) => {
    const {name} = props
    return <li>{name}</li>;
}
```
