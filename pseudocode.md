# Weather App
Build a weather app that displays the weather for a given location based on an input of zip code and eventually city.

The app will call an api and return the following information : city, current weather, temperature.

The app will display the information in a format that shows the city name at the top of the page, then current 
weather, then temperature in Celcius, Fahrenheit, and Kelvin, and finally will show an image based on the 
weather.

There will be a button that, when clicked, will display the elements and information from the search.

All elements besides button, header, and input, will be hidden until the button is clicked.

Page should be centered and styled in a professional manner.

Page should be mobile first, with an appropriate layout for desktop.

### Variables
header - main area to display 'Weather'

headerText - Weather

inputForm - div to contain button and input

mainBtn - button to display weather and get data

input - text box for zip code

resetBtn - button to clear forms/ hidden until page is displayed

cityHeader - container for name of city

cityText - 'City Name'

tempBox - box to contain 'Temperature' and 3 child boxes

celcius - box to display celcius

fahrenheit - box to display F

kelvin - box to display k

conditionBox - container to hold 'condition' and state of weather

conditionState - state of weather

imageBox - box to hold image

weatherData = {} - object to hold data from API



6 rows total

city, temp, condition, and image all inside the hidden div

### Functions

init() {
- createElements() {header, headerText, inputForm, mainBtn, input, resetBtn, cityHeader, cityText, tempBox, celcius, fahrenheit, kelvin, conditionBox, conditionState, imageBox}
- assign classes to appropriate elements
- assign ids to appropriate elements
- append elements to appropriate parents
- hide all elements except button, input, and header.
}

tempConvert(num) {
convert num to cel and fahr
assign cel to celcius and fahr to fahrenheit
}



getData (url) {
const axios = require('axios').default;
     GET(url) {
        .then(function (response) {
        let weatherData = response
        }
    }
}

populate() {
    set data from api equal to new object
}

clear() {
    reset populated elements
}


