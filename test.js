import test from 'ava'
import {
  getUserByUsername,
  getMediaByCode,
  getStories,
  getStoriesFeed,
  getMediaByLocation,
  getUserHighlights
} from './index'

const {SESSIONID, USERID} = process.env

test('getUserByUsername', async t => {
  const {user} = await getUserByUsername(
      {username: 'instagram', userid: USERID, sessionid: SESSIONID}
    )
  t.is(user.id, '25025320')
  t.is(user.username, 'instagram')
})

test('getUserHighlights', async t => {
  const {status, tray} = await getUserHighlights({id: '25025320', userid: USERID, sessionid: SESSIONID})

  t.is(status, 'ok')
  t.is(Boolean(tray.some(({id}) => id === 'highlight:17953051600687015')), true)
})

test('getMediaByCode', async t => {
  const {items} = await getMediaByCode(
    {code: 'BUu14BdBkO5', userid: USERID, sessionid: SESSIONID})

  t.is(items[0].pk, 1526394270041654300)
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

test('getMediaByLocation', async t => {
  const {location_info: location} = await getMediaByLocation(
    {id: '292188415', userid: USERID, sessionid: SESSIONID}
  )
  t.is(location.location_id, '292188415')
  t.is(location.name, 'Eiffel Tower')
})
