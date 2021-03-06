const test = require('ava');
const unicode_aware_truncate = require('../');

test('truncate_LongStringWithEmoji_ReturnsTruncatedStringWithEmoji', t => {
  let longEmojiString = '๐จโ๐จโ๐งโ๐ง๐จโ๐ฆโ๐ฆ๐จโ๐ฉโ๐ฆ๐ฅ๐คผโโ๏ธ๐ตโโ๏ธ๐จโ๐ง๐จโ๐จโ๐งโ๐ง๐จโโค๏ธโ๐จ'
  let truncated = unicode_aware_truncate(longEmojiString, 50);
  t.true(truncated.length <= 50);
});

test('truncate_LongSingleUnicodeCharacter_ReturnsEmptyString', t => {
  let singleUnicodeCharacter = 'yโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬโฬ'
  let truncated = unicode_aware_truncate(singleUnicodeCharacter, 50);
  t.true(truncated.length === 0);
});
