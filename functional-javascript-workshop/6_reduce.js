function countWords(inputWords) {
  return inputWords.reduce(function (result, value) {
    if (result[value] != undefined) {result[value]++} else {result[value] = 1}
    return result
  }, {})
}

module.exports = countWords
