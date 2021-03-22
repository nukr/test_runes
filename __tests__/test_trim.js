const test = require('ava');
const unicode_aware_trim = require('../');

test('trim_LongStringWithEmoji_ReturnsTrimedStringWithEmoji', t => {
  let longEmojiString = '👨‍👨‍👧‍👧👨‍👦‍👦👨‍👩‍👦👥🤼‍♂️🚵‍♀️👨‍👧👨‍👨‍👧‍👧👨‍❤️‍👨'
  let trimed = unicode_aware_trim(longEmojiString, 50);
  t.true(trimed.length <= 50);
});

test('trim_LongSingleUnicodeCharacter_ReturnsEmptyString', t => {
  let singleUnicodeCharacter = 'y‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑'
  let trimed = unicode_aware_trim(singleUnicodeCharacter, 50);
  t.true(trimed.length === 0);
});
