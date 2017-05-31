# instagram-stories

[![Build Status](https://travis-ci.org/jlobos/instagram-stories.svg?branch=master)](https://travis-ci.org/jlobos/instagram-stories)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

Get the Instagram Stories in Node.js and Browser

## Install

```
npm install --save instagram-stories
```

## Usage

```js
const {
  getStories,
  getMediaByCode,
  getUserByUsername
} = require('instagram-stories')

// Get stories of Instagram
// id:        account id for get stories
// userid:    me id
// sessionid: value of cookies from Instagram
getStories({ id: 25025320, userid: 1284161654, sessionid: '' }).then(stories => {
  console.log(stories)
})

getMediaByCode('BUu14BdBkO5').then(media => {
  console.log(media)
})

getUserByUsername('instagram').then(({ user }) => {
  console.log(user.id)
})
```

## License

MIT © [Jesús Lobos](https://jlobos.com/)
