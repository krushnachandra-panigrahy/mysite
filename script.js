// Function to update the counter and store it in local storage
function updateCounter() {
    var counterElement = document.getElementById("counter");
    var count = parseInt(counterElement.textContent) || 0;
    count++;

    // Update the counter element and store the count in local storage
    counterElement.textContent = count;
    localStorage.setItem("visitorCount", count);
}

// Check if the counter value is in local storage and update the page
if (localStorage.getItem("visitorCount")) {
    var count = localStorage.getItem("visitorCount");
    document.getElementById("counter").textContent = count;
}

// Add an event listener to increment the counter when the page loads
window.addEventListener("load", updateCounter);

// Initialize the counter to 1 by default
var count = 1;

// Check if the counter value is in local storage
if (localStorage.getItem("visitorCount")) {
    count = parseInt(localStorage.getItem("visitorCount"));
}

// Increment the counter and display it
var counterElement = document.getElementById("counter");
var startCount = 1; // Start the animation from 1
var endCount = count;

function updateCounterAnimation() {
    if (startCount <= endCount) {
        counterElement.textContent = startCount;
        startCount++;
        counterElement.classList.add("counting-animation");
        setTimeout(function () {
            counterElement.classList.remove("counting-animation");
            updateCounterAnimation(); // Call the function recursively
        }, 1);
    }
}

// Call the function to start the counting animation
updateCounterAnimation();