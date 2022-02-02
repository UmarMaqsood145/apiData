const inputTxt = document.querySelector('#searchInput');
var button = document.querySelector('#searchBtn');
const weatherCard = document.querySelector('.weatherCard');

const API_Key = "1459776f66acec8ddfbaa3e6bc99add7";
button.addEventListener('click', () => {
    const cityInput = inputTxt.value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&APPID=${API_Key}`)
        .then(res => res.json())
        .then(data => {
            inputTxt.value = " ";
            weatherCard.innerHTML = `
                    <ul>
                        <li class="desc">${data.weather[0].description}</li>
                        <li class="city">${data.name}</li>
                        <li class="temp">${data.main.temp}°c</li>
                    </ul> `;
        });

});
