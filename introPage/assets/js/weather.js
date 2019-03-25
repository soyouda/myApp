const KEY = "bf71336d7c9f3cbda6a39d054f2c3232";
const callAPI = "api.openweathermap.org/data/2.5/weather?lat=35&lon=139";

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function getApi() {
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position.coords.latitude, position.coords.longitude);
    });
}

function init() {
    getLocation();
    getApi();
}

init();