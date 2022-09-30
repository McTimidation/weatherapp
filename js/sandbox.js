


let main = document.getElementById('main');

// let zipInput = document.getElementById('zipInput');
// let cityURL = '';


// let kelvinTemp = document.getElementById('kelvinTemp');
// let fahrTemp = document.getElementById('fahrTemp');
// let celTemp = document.getElementById('celTemp');
// let condText = document.getElementById('condText');



// function createTopElements(tag, id, clas = '') {
//     let newTag = document.createElement(tag);
//     newTag.setAttribute('id', id);
//     newTag.setAttribute('class', clas);
//     main.appendChild(newTag);
// }

// function createTopElements(tag, id, clas = '') {
//     let newTag = document.createElement(tag);
//     newTag.setAttribute('id', id);
//     newTag.setAttribute('class', clas);
//     main.appendChild(newTag);
// }

function createButton(text, id) {
    let button = document.createElement('button');
    button.setAttribute('id', id);
    button.setAttribute('class','col btn');
    button.textContent = text;
    headerRow.appendChild(button);
}

function createHeaderElements() {
    createElement('div', 'headerRow','row','','main');
    // createElement('div','mainContent','','','main');
    let headerRow = document.getElementById('headerRow');
    let headerText = document.createElement('h1');
    let zipInput = document.createElement('input');
    headerRow.appendChild(headerText);
    headerText.textContent = 'Weather'
    zipInput.setAttribute('type','text');
    zipInput.setAttribute('placeholder','zipcode');
    zipInput.setAttribute('class','col');
    zipInput.setAttribute('id','zipInput');
    createButton('Submit','mainBtn');
    headerRow.appendChild(zipInput);
    createButton('Reset','resetBtn');
}

// function createIMG()

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


// need value extracted at the moment the button is clicked, not on page load.

function getData(url) {
    try {
        axios.get(url)
            .then((data) => {
                createMainContent();
                displayData(data);
            })
        }
    catch (err) {
        alert('Please enter a valid zip code');
    }
}

// function createIcon(data) {
//     let icon = data.data.weather[0].icon;
//     let imgElement = document.createElement('img');
//     imgElement.setAttribute('id', 'imgIcon');
//     document.getElementById('condText').appendChild('imgIcon');
//     imgElement.setAttribute('src', `https://openweathermap.org/img/wn/${icon}@2x.png`)
// }

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

    // createIcon();
    // let icon = data.data.weather[0].icon;
    // document.createElement('img').setAttribute('id', 'imgIcon').setAttribute('src',`https://openweathermap.org/img/wn/${icon}@2x.png`);
    // document.getElementById('condText').appendChild('imgIcon');
}

// this function attempts to store data from API into an object
function weatherData(data) {
    this.city = data.data.name;
    this.temperature = data.data.main.temp;
    this.weather = data.data.weather.description;
}

function zipCodeSubmit() {
    if (document.getElementById('mainContent')) {
    document.getElementById('mainContent').remove();
    }
    let zipURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipInput.value},us&appid=3800df40eae1baf24aaca89671affc52`
    getData(zipURL);
}

function reset() {
    document.getElementById('mainContent').remove();
    zipInput.value = '';
}


function convertToCel(num) {
    let celNum = Math.floor(num - 273.15);
    document.getElementById('celTemp').textContent = celNum;
}

function convertToFahr(num) {
    let fahrNum = Math.floor(((num - 273.15) * (9 / 5)) + 32);
    document.getElementById('fahrTemp').textContent = fahrNum;
}

function init() {
    // createTopElements('div', 'headerRow', 'row');
    // createTopElements('div', 'mainContent');
    createHeaderElements();
}

init();


document.getElementById('mainBtn').onclick = zipCodeSubmit;

document.getElementById('resetBtn').onclick = reset;