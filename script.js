document.addEventListener("DOMContentLoaded", function () {
    // Initialize the counter to 0 by default
    var count = 0;

    // Check if the counter value is in local storage
    if (localStorage.getItem("visitorCount")) {
        count = parseInt(localStorage.getItem("visitorCount"));
    }

    // Increment the counter and display it
    var counterElement = document.getElementById("counter");
    var startCount = 1; // Start the animation from 1
    var endCount = count;

    function updateCounter() {
        if (startCount <= endCount) {
            counterElement.textContent = startCount;
            startCount++;
            counterElement.classList.add("counting-animation");
            setTimeout(function () {
                counterElement.classList.remove("counting-animation");
                updateCounter(); // Call the function recursively
            }, 1);
        }
    }

    updateCounter(); // Start the counting animation

    // Store the updated count in local storage
    localStorage.setItem("visitorCount", count.toString());
});
