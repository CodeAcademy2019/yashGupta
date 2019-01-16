function operation() {
    for (var i = 0; i < 1000000; i++) {
      // burn some CPU cycles
    }
    // count how many times this function was called
    count++
  }
function repeat(operation, num) {
    // modify this so it can be interrupted
    
    if (num <= 0) return
    operation()
    return repeat(operation, --num)
  }

  module.exports = repeat