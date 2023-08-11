function toggleNav() {
  var navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("nav-active");
}


const textElement = document.getElementById("text");
const lines = [
  "Welcome to My Portfolio!",
  "I am a Web Developer.",
  "Passionate about creating amazing websites.",
  "Let's build something incredible together!",
];
const delay = 100; // Adjust the typing speed here (milliseconds)
let lineIndex = 0;
let charIndex = 0;

function typeLine() {
  if (lineIndex < lines.length) {
    if (charIndex < lines[lineIndex].length) {
      textElement.textContent = lines[lineIndex].substr(0, charIndex + 1);
      charIndex++;
      setTimeout(typeLine, delay);
    } else {
      // Move to the next line after finishing the current one
      lineIndex++;
      charIndex = 0;
      setTimeout(typeLine, delay * 2); // Add extra delay before starting the next line
    }
  } else {
    // Reset lineIndex to 0 to repeat the animation
    lineIndex = 0;
    setTimeout(typeLine, delay);
  }
}

typeLine();

// Function to update the progress bar value and text
function updateProgressBar(barId, value) {
  const progressBar = document.getElementById(barId);
  progressBar.style.width = value + '%';
  const progressText = progressBar.nextElementSibling;
  progressText.textContent = value + '%';
}

// Function to increase the progress bar gradually
function increaseProgressBar(barId, targetValue) {
  let value = 0;
  const duration = 2000; // Duration in milliseconds (2 seconds in this example)
  const increment = 1; // How much to increment the progress per step (1% in this example)

  const interval = setInterval(() => {
      value += increment;
      updateProgressBar(barId, value);

      if (value >= targetValue) {
          clearInterval(interval);
      }
  }, duration / 100); // Divide duration by 100 for smoother animation
}

// Call the function to increase the progress bars
increaseProgressBar('progress-bar-1', 60);
increaseProgressBar('progress-bar-2', 90);
increaseProgressBar('progress-bar-3', 75);
increaseProgressBar('progress-bar-4', 80);



