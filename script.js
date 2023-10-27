// Script file for visitor counter 
document.addEventListener("DOMContentLoaded", function () {
    // Check if the counter value is in local storage
    if (localStorage.getItem("visitorCount")) {
        var count = parseInt(localStorage.getItem("visitorCount"));
    } else {
        var count = 0;
    }

    // Increment the counter and display it
    count++;
    document.getElementById("counter").textContent = count;

    // Store the updated count in local storage
    localStorage.setItem("visitorCount", count.toString());
});


// Script file for collapsible environment 
const collapsibles = document.querySelectorAll('.collapsible');
        collapsibles.forEach(collapsible => {
            collapsible.addEventListener('click', function() {
                this.classList.toggle('active');
                const content = this.nextElementSibling;
                if (content.style.display === 'block') {
                    content.style.display = 'none';
                } else {
                    content.style.display = 'block';
                }
            });
        });