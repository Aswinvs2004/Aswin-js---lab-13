/* Variables
-------------------------------------------------- */
// Acquire the <range> element inside the <dd id="alpha"> element to display the alpha value
const alphaSlider = document.querySelector('#alpha input[type="range"]');
// Obtain the <output> element following the preceding element
const alphaValue = document.querySelector('#alpha output');
// Access the <range> element inside the <dd id="beta"> element to display the beta value
const betaSlider = document.querySelector('#beta input[type="range"]');
// Obtain the <output> element following the preceding element
const betaValue = document.querySelector('#beta output');
// Retrieve the <range> element inside the <dd id="gamma"> element to display the gamma value
const gammaSlider = document.querySelector('#gamma input[type="range"]');
// Obtain the <output> element following the preceding element
const gammaValue = document.querySelector('#gamma output');
// Access the <p id="status"> element to output error messages if necessary
const statusMsg = document.querySelector('#status');

/* Functions
-------------------------------------------------- */

// Define the error() function
function error() {
    // Output an appropriate error message
    statusMsg.textContent = "Device orientation API is not supported by your browser.";
}


/* Script Logic
-------------------------------------------------- */
// Check if the DeviceOrientationEvent is supported
if (!window.DeviceOrientationEvent) {
    // Invoke the error() function if not supported
    error();
} else {
    // Add an event listener for the 'deviceorientation' event and specify an anonymous callback function
    window.addEventListener("deviceorientation", function (event) {
        console.log(event);
        // Capture the alpha value (rotation) and update the textContent for the <output> element
        alphaValue.textContent = Math.round(event.alpha) + "°";
        // Update the position of the alpha slider using the same value
        alphaSlider.value = Math.round(event.alpha);
        // Capture the beta value (tilt toward/away) and update the textContent for the <output> element
        betaValue.textContent = Math.round(event.beta) + "°";
        // Update the position of the beta slider using the same value
        betaSlider.value = Math.round(event.beta);
        // Capture the gamma value (tilt left/right) and update the textContent for the <output> element
        gammaValue.textContent = Math.round(event.gamma) + "°";
        // Update the position of the gamma slider using the same value
        gammaSlider.value = Math.round(event.gamma);
    })
}
/* Learn more at https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent */