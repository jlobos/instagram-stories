const fetch = require('isomorphic-fetch')

const defaultHeaders = {
  'x-ig-capabilities': '3w==',
  'user-agent': 'Instagram 9.5.1 (iPhone9,2; iOS 10_0_2; en_US; en-US; scale=2.61; 1080x1920) AppleWebKit/420+',
  host: 'i.instagram.com'
}

const getHeaders = (headers, sessionid, userid) => {
  return Object.assign(headers, {
    cookie: `sessionid=${sessionid}; ds_user_id=${userid}`
  })
}

exports.getUserByUsername = username => (
  fetch(`https://www.instagram.com/${username}/?__a=1`)
    .then(res => res.json())
)

exports.getMediaByCode = code => (
  fetch(`https://www.instagram.com/p/${code}/?__a=1`)
    .then(res => res.json())
)

exports.getStories = ({
  id,
  sessionid,
  userid,
  headers = defaultHeaders
}) => (
  fetch(`https://i.instagram.com/api/v1/feed/user/${id}/reel_media/`, {
    headers: getHeaders(headers, sessionid, userid)
  })
  .then(res => res.json())
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

exports.getMediaByLocation = locationId => (
  fetch(`https://www.instagram.com/explore/locations/${locationId}/?__a=1`)
    .then(res => res.json())
)
