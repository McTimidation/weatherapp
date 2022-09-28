

// let header = document.createElement('div').className('header container');
// let headerText = document.createElement('h1').className('text-center');
// let mainBtn = document.createElement('button').setAttribute('id','mainBtn');
// let zipInput = document.createElement('input').setAttribute('type','text');
let zipInput = document.getElementById('zipInput');
let cityURL = '';

// need value extracted at the moment the button is clicked, not on page load.
let zipURL = 'https://api.openweathermap.org/data/2.5/weather?zip=40511,us&appid=3800df40eae1baf24aaca89671affc52'
function getData(a) {
    axios.get(a)
    .then((data) => {
       let data.data.name = new weatherData(data);
    }
    }


function weatherData(data) {
   this.city = data.data.name;
   this.temperature = data.data.main.temp;
   this.weather = data.data.weather.description;
}

