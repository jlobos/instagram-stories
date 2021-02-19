import test from 'ava'
import {
  getUserByUsername,
  getMediaByCode,
  getStoriesFeed,
  getStories
} from './index'

const {SESSIONID, USERID} = process.env

test('getUserByUsername', async t => {
  const {user} = await getUserByUsername(
      {username: 'instagram', userid: USERID, sessionid: SESSIONID}
    )
  t.is(user.id, '25025320')
  t.is(user.username, 'instagram')
})

test('getMediaByCode', async t => {
  const {graphql} = await getMediaByCode(
    {code: 'BUu14BdBkO5', userid: USERID, sessionid: SESSIONID})
  t.is(graphql.shortcode_media.id, '1526394270041654201')
})

test('getStories', async t => {
  const {id, user, items, status} = await getStories(
    {id: 25025320, userid: USERID, sessionid: SESSIONID}
  )

  t.is(status, 'ok')
  t.true(Array.isArray(items))
  if (items.length > 0) {
    t.is(id, 25025320)
    t.is(user.username, 'instagram')
  }
})

test('getStoriesFeed', async t => {
  const {tray, status} = await getStoriesFeed(
    {userid: USERID, sessionid: SESSIONID}
  )

  t.is(status, 'ok')
  t.true(Array.isArray(tray))
})
