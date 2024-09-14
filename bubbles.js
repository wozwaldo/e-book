document.addEventListener("DOMContentLoaded", function() {

  const bubbles = document.querySelectorAll('.bubbles span');

  // First bubble's animation starts immediately
  if (bubbles[0]) {
    bubbles[0].style.animationDelay = '0s';
    bubbles[0].style.left = `${Math.random() * 100}%`; // Horizontal pozition randomized
  }

  // Randomized position and delay for all the other bubbles
  bubbles.forEach((bubble, index) => {
    if (index > 0) { // Selected all the other bubbles
      const randomLeft = Math.random() * 100; // Horizontal pozition randomized
      const randomDelay = Math.random() * 5; // Randomized delay (0-5s)

      bubble.style.left = `${randomLeft}%`;
      bubble.style.animationDelay = `${randomDelay}s`;
    }
  });
});