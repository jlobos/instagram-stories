import test from 'ava'
import {
  getUserByUsername,
  getMediaByCode,
  getStories,
  getStoriesFeed
} from './index'

const {SESSIONID} = process.env

test('getUserByUsername', async t => {
  const {user} = await getUserByUsername('instagram')
  t.is(user.id, '25025320')
  t.is(user.username, 'instagram')
})

test('getMediaByCode', async t => {
  const {graphql} = await getMediaByCode('BUu14BdBkO5')
  t.is(graphql.shortcode_media.id, '1526394270041654201')
})

test('getStories', async t => {
  const {id, user, items, status} = await getStories(
    {id: 25025320, userid: 1284161654, sessionid: SESSIONID}
  )

  t.is(id, 25025320)
  t.is(user.username, 'instagram')
  t.is(status, 'ok')
  t.true(Array.isArray(items))
})

test('getStoriesFeed', async t => {
  const {tray, status} = await getStoriesFeed(
    {userid: 1284161654, sessionid: SESSIONID}
  )

  t.is(status, 'ok')
  t.true(Array.isArray(tray))
})

test('getMediaByLocation', async t => {
  const {locationId} = await getMediaByLocation('292188415')
  t.is(location.location.id, '292188415')
  t.is(location.location.username, 'Eiffel Tower')
  t.is(location.location.slug, 'eiffel-tower')
})
