document.getElementById('myButton').addEventListener('click', function() {
    // Update the message when the button is clicked
    const messageElement = document.getElementById('message');
    messageElement.innerText = "Whats up Doc!";

    // Show the Bugs Bunny image
    const bugsImage = document.getElementById('bugsImage');
    bugsImage.style.display = 'block';

    // Set a timeout to hide the image and the message after 5 seconds (5000 milliseconds)
    setTimeout(function() {
        bugsImage.style.display = 'none'; // Hide the image
        messageElement.innerText = '';    // Hide the message text
    }, 5000);
});
