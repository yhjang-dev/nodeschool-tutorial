function repeat(operation, num) {
  setInterval(function () {
    if (num <= 0) return
    operation();
    --num
  }, 0);
}

module.exports = repeat
