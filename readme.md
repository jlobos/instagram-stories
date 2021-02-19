# instagram-stories

[![Build Status](https://travis-ci.org/jlobos/instagram-stories.svg?branch=master)](https://travis-ci.org/github/jlobos/instagram-stories)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![Gitter](https://camo.githubusercontent.com/e5749889f0ddb3458befeee4f3fcac67e73ba76d4fc3aa4cbcc91c8085a34369/68747470733a2f2f6261646765732e6769747465722e696d2f6f682d6d792d706f73682f4c6f6262792e737667)](https://gitter.im/instagram-stories)

Get the Instagram Stories in Node.js

## Install

```
npm install --save instagram-stories
```

## Usage

```js
const {
  getStories,
  getStoriesFeed,
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

// Get stories of people you follow
getStoriesFeed({ userid: 1284161654, userid: 1284161654, sessionid: '' }).then(feed => {
  console.log(feed)
})

getMediaByCode({ code: 'BUu14BdBkO5', userid: 1284161654, sessionid: '' }).then(media => {
  console.log(media)
})

getUserByUsername({ username: 'instagram', userid: 1284161654, sessionid: '' }).then(({ user }) => {
  console.log(user.id)
})
```

## License

MIT © Jesús Lobos, Dmitry Konstantinov
