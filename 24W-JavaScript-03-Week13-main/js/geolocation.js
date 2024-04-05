/* Variables
-------------------------------------------------- */
// STEP 1a: Grab the first <dd> element for displaying the latitude
const latitudeElement = document.querySelector('#latlong dd:nth-of-type(1)');
// STEP 1b: Grab the second <dd> element for displaying the longitude
const longitudeElement = document.querySelector('#latlong dd:nth-of-type(2)');
// STEP 1c: Grab the <p> element for outputting geolocation status messages
const statusMessageElement = document.querySelector('#status');
// STEP 1d: Grab the <a> element to use as a link to OpenMaps if the geolocation was successful
const mapLinkElement = document.querySelector('#mapLink');

/* Functions
-------------------------------------------------- */
// STEP 3b: Build out the success handler function, receiving the position as a parameter
function successHandler(position) {
    statusMessageElement.textContent = "Your location has been found!";
    latitudeElement.textContent = position.coords.latitude + "°";
    longitudeElement.textContent = position.coords.longitude + "°";
    // STEP 3d: Build out the link to OpenStreetMap
    const url = `https://www.openstreetmap.org/#map=18/${position.coords.latitude}/${position.coords.longitude}`;
    mapLinkElement.setAttribute("href", url);
    mapLinkElement.setAttribute("target", "_blank");
    mapLinkElement.textContent = "Open on Map";
}

// STEP 4a: Construct the error handler function
function errorHandler() {
    // STEP 4b: Output a suitable error message
    statusMessageElement.textContent = "Sorry, your location couldn't be determined.";
}

/* Script Logic
-------------------------------------------------- */
// STEP 2a: Check support for geolocation
if (!navigator.geolocation) {
    // STEP 2b: Output a message if geolocation is not supported
    statusMessageElement.textContent = "Your browser does not support geolocation.";
} else {
    // STEP 2c: Give a status message if geolocation is supported
    statusMessageElement.textContent = "Locating...";
    // STEP 3a: Use the getCurrentPosition() method to get the current position
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
}
