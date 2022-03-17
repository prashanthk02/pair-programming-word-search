const transpose = require('./transpose');

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    const transposeLetters = transpose(letters);
    const verticalJoin = transposeLetters.map(ls => ls.join(''))

    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    for (tl of verticalJoin) {
      if (tl.includes(word)) return true
    }
    return false;
}

module.exports = wordSearch