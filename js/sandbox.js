

// let header = document.createElement('div').className('header container');
// let headerText = document.createElement('h1').className('text-center');
// let mainBtn = document.createElement('button').setAttribute('id','mainBtn');
// let zipInput = document.createElement('input').setAttribute('type','text');
let main = document.getElementById('main');

let zipInput = document.getElementById('zipInput');
let cityURL = '';

let cityText = document.getElementById('cityText');
let kelvinTemp = document.getElementById('kelvinTemp');
let fahrTemp = document.getElementById('fahrTemp');
let celTemp = document.getElementById('celTemp');
let condText = document.getElementById('condText');



function createTopElements(tag, id ='', clas = '') {
    let newTag = document.createElement(tag);
    if (id) {
        newTag.setAttribute('id',id);
    }
    newTag.setAttribute('class', clas);
    main.appendChild(newTag);
}




// need value extracted at the moment the button is clicked, not on page load.
let zipURL = 'https://api.openweathermap.org/data/2.5/weather?zip=40511,us&appid=3800df40eae1baf24aaca89671affc52'
function getData(a) {
    axios.get(a)
    .then((data) => {
    displayData(data);
    })
}

function displayData(data) {
    cityText.textContent = data.data.name;
    let kelvin = data.data.main.temp;
    kelvinTemp.textContent = kelvin;
    convertToCel(kelvin);
    convertToFahr(kelvin);
    condText.textContent = data.data.weather[0].main;
    
}

// this function attempts to store data from API into an object
function weatherData(data) {
   this.city = data.data.name;
   this.temperature = data.data.main.temp;
   this.weather = data.data.weather.description;
}

function convertToCel(num) {
  let celNum = Math.floor(num - 273.15);
    celTemp.textContent = celNum;
}

function convertToFahr(num) {
   let fahrNum = Math.floor(((num - 273.15)*(9/5))+32);
    fahrTemp.textContent = fahrNum;
}

function init() {
    createTopElements('div', '', 'row');
    createTopElements('div', 'mainContent')

}