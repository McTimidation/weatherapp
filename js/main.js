let main = document.getElementById('main');


// function to create html elements
function createElement(tag, id='', cl='',text='', parent='mainContent') {
    let newElement = document.createElement(tag);
    if (id) {
    newElement.setAttribute('id', id);
    }
    newElement.setAttribute('class', cl);
    if (text) {
    newElement.textContent = text;
    }
    document.getElementById(parent).appendChild(newElement);
}

// function to create buttons
function createButton(text, id) {
    let button = document.createElement('button');
    button.setAttribute('id', id);
    button.setAttribute('class','col btn');
    button.textContent = text;
    headerRow.appendChild(button);
}

// function to create header elements
function createHeaderElements() {
    createElement('div', 'headerRow','row','','main');
    // createElement('div','mainContent','','','main');
    let headerRow = document.getElementById('headerRow');
    let headerText = document.createElement('h1');
    let zipInput = document.createElement('input');
    headerRow.appendChild(headerText);
    headerText.textContent = 'Weather'
    zipInput.setAttribute('type','number');
    zipInput.setAttribute('placeholder','zipcode');
    zipInput.setAttribute('class','col');
    zipInput.setAttribute('id','zipInput');
    createButton('Submit','mainBtn');
    headerRow.appendChild(zipInput);
    createButton('Reset','resetBtn');
}

// function to create main content
function createMainContent() {
    createElement('div','mainContent','','','main');
    createElement('div', 'city', 'row', '');
    createElement('div', 'cityHeader', 'col-12', '', 'city');
    createElement('h3', '', '', 'City', 'cityHeader');
    createElement('div', 'cityText', 'col', '', 'cityHeader');
    createElement('div', 'tempBox', 'row', '');
    createElement('div', 'tempCol', 'col-12', '', 'tempBox');
    createElement('h3', '', '', 'Temperature', 'tempCol');
    createElement('div', 'kelBox', 'col', 'Kelvin', 'tempBox');
    createElement('div', 'celBox', 'col', 'Celcius', 'tempBox');
    createElement('div', 'fahrBox', 'col', 'Fahrenheit', 'tempBox');
    createElement('div', 'kelvinTemp', 'col', '', 'kelBox');
    createElement('div', 'celTemp', 'col', '', 'celBox');
    createElement('div', 'fahrTemp', 'col', '', 'fahrBox');
    createElement('div', 'conditionBox', 'row', '');
    createElement('div', 'conditionHeader', 'col-12', '', 'conditionBox');
    createElement('h3', '', '', 'Condition', 'conditionHeader');
    createElement('div', 'condText', 'col', '', 'conditionBox');
}

// api call function to retrieve data and display it
function getData(url) {
        axios.get(url)
            .then((data) => {
                createMainContent();
                displayData(data);
            })
            .catch(error => alert('Please enter a valid zip code')
            )
    }


// function to display data on page
function displayData(data) {
    document.getElementById('cityText').textContent = data.data.name;
    document.getElementById('kelvinTemp').textContent = data.data.main.temp;
    convertToCel(data.data.main.temp);
    convertToFahr(data.data.main.temp);
    document.getElementById('condText').textContent = data.data.weather[0].main;
    let icon = data.data.weather[0].icon;
    let imgElement = document.createElement('img');
    document.getElementById('condText').appendChild(imgElement);
    imgElement.setAttribute('src', `https://openweathermap.org/img/wn/${icon}@2x.png`)
}

// function to check if zip input is 5 characters and remove main content if it exists.
// if zip is invalid will send an alert, if valid will run getData function
function zipCodeSubmit() {
    if (document.getElementById('mainContent')) {
    document.getElementById('mainContent').remove();
    }
    if (zipInput.value.length === 5) {
        let zipURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipInput.value},us&appid=3800df40eae1baf24aaca89671affc52`
        getData(zipURL);
    } else {
        alert('Please enter a valid zip code');
    }
}

// reset function to remove main content from dom and set zip input to empty string
function reset() {
    document.getElementById('mainContent').remove();
    zipInput.value = '';
}

// function to convert kelvin to celcius
function convertToCel(num) {
    let celNum = Math.floor(num - 273.15);
    document.getElementById('celTemp').textContent = celNum;
}

// function to convert kelvin to fahrenheit
function convertToFahr(num) {
    let fahrNum = Math.floor(((num - 273.15) * (9 / 5)) + 32);
    document.getElementById('fahrTemp').textContent = fahrNum;
}

// function to initialize page
function init() {
    createHeaderElements();
}

// sets up program on page load
init();

// runs zipcodeSubmit function if main button is clicked
document.getElementById('mainBtn').onclick = zipCodeSubmit;

// runs reset if rset button is clicked
document.getElementById('resetBtn').onclick = reset;
