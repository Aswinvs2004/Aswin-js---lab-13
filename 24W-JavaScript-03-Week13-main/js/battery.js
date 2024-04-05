/* Variables
-------------------------------------------------- */
// Get the first <dd> element to display battery charging status
const chargeStatus = document.querySelector('#battery dd:nth-of-type(1)');
// Get the <output> element inside the second <dd> element to show battery charge level
const chargeLevel = document.querySelector('#battery dd:nth-of-type(2) output');
// Get the <progress> element inside the second <dd> element for a graphical representation of battery charge level
const chargeMeter = document.querySelector('#battery dd:nth-of-type(2) progress');

/* Functions
-------------------------------------------------- */
// Define function to update battery status
function updateBatteryStatus(battery) {
    console.log(battery);
    // Update charging status
    if (battery.charging === true) {
        chargeStatus.textContent = "Charging...";
    } else {
        chargeStatus.textContent = "Discharging...";
    }
    // Update charge level
    chargeLevel.textContent = (battery.level * 100) + "%";
    chargeMeter.value = battery.level * 100;
}

// Retrieve battery information using navigator.getBattery() method
navigator.getBattery().then(battery => {
    // Display battery object
    console.log(battery);
    // Update battery information
    updateBatteryStatus(battery);
    // Listen for charging status changes
    battery.addEventListener("chargingchange", () => {
        updateBatteryStatus(battery);
    });
    // Listen for charge level changes
    battery.addEventListener("levelchange", () => {
        updateBatteryStatus(battery);
    });
})

/* This script adapted from the excellent code examples found at https://www.w3.org/TR/battery-status/#examples and https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API */
