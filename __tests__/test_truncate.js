const test = require('ava');
const unicode_aware_truncate = require('../');

test('truncate_LongStringWithEmoji_ReturnsTruncatedStringWithEmoji', t => {
  let longEmojiString = '👨‍👨‍👧‍👧👨‍👦‍👦👨‍👩‍👦👥🤼‍♂️🚵‍♀️👨‍👧👨‍👨‍👧‍👧👨‍❤️‍👨'
  let truncated = unicode_aware_truncate(longEmojiString, 50);
  t.true(truncated.length <= 50);
});

test('truncate_LongSingleUnicodeCharacter_ReturnsEmptyString', t => {
  let singleUnicodeCharacter = 'y‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑‍̑'
  let truncated = unicode_aware_truncate(singleUnicodeCharacter, 50);
  t.true(truncated.length === 0);
});
