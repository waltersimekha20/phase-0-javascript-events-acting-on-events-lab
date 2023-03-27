// Your code here
function moveDodgerLeft() {
    var left = parseInt(dodger.style.left)
    if (left > 0) {
      dodger.style.left = `${left - 1}px`
    }
  }
  
  function moveDodgerRight() {
    var left = parseInt(dodger.style.left)
    if (left < 360) {
      dodger.style.left = `${left + 1}px`
    }
  }
