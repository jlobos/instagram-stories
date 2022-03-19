const fetch = require('isomorphic-fetch')

const defaultHeaders = {
  'sec-ch-ua': '"Google Chrome";v="87", " Not;A Brand";v="99", "Chromium";v="87"',
  'sec-ch-ua-mobile': '?0',
  'sec-fetch-dest': 'empty',
  'sec-fetch-mode': 'cors',
  'sec-fetch-site': 'same-site',
  'x-ig-app-id': '936619743392459',
  'x-ig-www-claim': 'hmac.AR0A6WzcCoXWstKAUuy1gRbCQFUs8FoZCp3ap2UMk_KQNBSH'
}

const getHeaders = (headers, sessionid, userid) => {
  return Object.assign(headers, {
    cookie: `sessionid=${sessionid}; ds_user_id=${userid}`
  })
}

exports.getUserByUsername = ({
  username,
  sessionid,
  userid,
  headers = defaultHeaders
}) => (
  fetch(`https://www.instagram.com/${username}/?__a=1`, {
    headers: getHeaders(headers, sessionid, userid)
  })
    .then(res => res.json())
    .then(({graphql}) => graphql)
)

exports.getMediaByCode = ({
  code,
  sessionid,
  userid,
  headers = defaultHeaders
}) => (
  fetch(`https://www.instagram.com/p/${code}/?__a=1`, {
    headers: getHeaders(headers, sessionid, userid)
  })
    .then(res => res.json())
)

exports.getStories = ({
  id,
  sessionid,
  userid,
  headers = defaultHeaders
}) => (
  fetch(`https://i.instagram.com/api/v1/feed/user/${id}/story/`, {
    headers: getHeaders(headers, sessionid, userid)
  })
  .then(res => res.json())
  .then(({status, reel}) => ({status, items: reel ? reel.items : []}))
)

exports.getStoriesFeed = ({
  sessionid,
  userid,
  headers = defaultHeaders
}) => (
  fetch(`https://i.instagram.com/api/v1/feed/reels_tray/`, {
    headers: getHeaders(headers, sessionid, userid)
  })
  .then(res => res.json())
)

exports.getMediaByLocation = ({
  id,
  sessionid,
  userid,
  headers = defaultHeaders
}) => (
  fetch(`https://www.instagram.com/explore/locations/${id}/?__a=1`, {
    headers: getHeaders(headers, sessionid, userid)
  })
    .then(res => res.json())
    .then(({native_location_data: location}) => location)
)

exports.getUserHighlights = ({
  id,
  sessionid,
  userid,
  headers = defaultHeaders
}) => fetch(`https://i.instagram.com/api/v1/highlights/${id}/highlights_tray/`, {
  headers: getHeaders(headers, sessionid, userid)
}).then(res => res.json())
