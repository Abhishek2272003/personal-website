
// Function to toggle navigation menu
function toggleNav() {
  // Get the element that contains the navigation links by its ID
  var navLinks = document.getElementById("navLinks");
  // Toggle the "nav-active" class to show or hide the navigation menu
  navLinks.classList.toggle("nav-active");
}

// Elements and text for typing animation
const textElement = document.getElementById("text");
const lines = [
  "Welcome to My Portfolio!",
  "I am a Web Developer.",
  "Passionate about creating amazing websites.",
  "Let's build something incredible together!",
];
const delay = 100; // Delay between typing each character
let lineIndex = 0; // Index of the current line being typed
let charIndex = 0; // Index of the current character being typed

// Function for typing animation
function typeLine() {
  // Check if there are more lines to display
  if (lineIndex < lines.length) {
    // Check if there are more characters to display in the current line
    if (charIndex < lines[lineIndex].length) {
      // Display the characters incrementally to simulate typing effect
      textElement.textContent = lines[lineIndex].substr(0, charIndex + 1);
      charIndex++;
      // Set a delay to continue typing the next character
      setTimeout(typeLine, delay);
    } else {
      // Move to the next line and reset charIndex for the next line
      lineIndex++;
      charIndex = 0;
      // Set a longer delay before typing the next line
      setTimeout(typeLine, delay * 2);
    }
  } else {
    // Restart the animation when all lines have been displayed
    lineIndex = 0;
    setTimeout(typeLine, delay);
  }
}

// Start typing animation
typeLine();

// Function to update progress bar
function updateProgressBar(barId, value) {
  // Get the progress bar element by its ID
  const progressBar = document.getElementById(barId);
  // Update the width of the progress bar based on the given value
  progressBar.style.width = value + '%';
  // Get the corresponding progress text element next to the progress bar
  const progressText = progressBar.nextElementSibling;
  // Update the text content to reflect the current value
  progressText.textContent = value + '%';
}

// Function to increase progress bar gradually
function increaseProgressBar(barId, targetValue) {
  // Create a Promise to manage the progress animation
  return new Promise((resolve) => {
    let value = 0; // Initial value of the progress
    const duration = 2000; // Total duration for the animation
    const increment = 1; // Amount to increment the progress

    // Set an interval to gradually increase the progress value
    const interval = setInterval(() => {
      value += increment;
      // Update the progress bar and text with the new value
      updateProgressBar(barId, value);

      // Check if the target value has been reached
      if (value >= targetValue) {
        // Clear the interval and resolve the Promise
        clearInterval(interval);
        resolve();
      }
    }, duration / 100); // Divide the duration into intervals for smoother animation
  });
}

// Function to restart all progress bars
function restartAllProgressBars() {
  // Array of target values for each progress bar
  const targetValues = [60, 90, 75, 80];

  // Use Promise.all to wait for all progress bars to complete
  Promise.all([
    increaseProgressBar('progress-bar-1', targetValues[0]),
    increaseProgressBar('progress-bar-2', targetValues[1]),
    increaseProgressBar('progress-bar-3', targetValues[2]),
    increaseProgressBar('progress-bar-4', targetValues[3])
  ]).then(() => {
    // After all progress bars complete, restart the process after a delay
    setTimeout(startAllProgressBars, 1000);
  });
}

// Function to start all progress bars
function startAllProgressBars() {
  // Begin the process of restarting all progress bars
  restartAllProgressBars();
}

// Initial start of all progress bars
startAllProgressBars();
