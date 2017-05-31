import test from 'ava'
import {
  getUserByUsername,
  getMediaByCode
} from './index'

test('getUserByUsername', async t => {
  const {user} = await getUserByUsername('instagram')
  t.is(user.id, '25025320')
  t.is(user.username, 'instagram')
})

test('getMediaByCode', async t => {
  const {graphql} = await getMediaByCode('BUu14BdBkO5')
  t.is(graphql.shortcode_media.id, '1526394270041654201')
})
