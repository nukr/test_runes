const runes = require('runes');

function unicode_aware_truncate(str, desiredLength) {
  const r = runes(str);
  return r.reduce((acc, curr) => {
    let totalLength = acc.length + curr.length;
    return totalLength <= desiredLength ? acc + curr : acc
  }, '');
}

module.exports = unicode_aware_truncate;
