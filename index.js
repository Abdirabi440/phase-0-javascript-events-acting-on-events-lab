// Your code here

function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    let leftNumbers = dodger.style.left.replace('px', '');
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 10}px`;
    }
  }
  
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    let leftNumbers = dodger.style.left.replace('px', '');
    let left = parseInt(leftNumbers, 10);
  
    if (left < 360) {  // Assuming the dodger's container is 400px wide and dodger is 40px wide
      dodger.style.left = `${left + 10}px`;
    }
  }
  