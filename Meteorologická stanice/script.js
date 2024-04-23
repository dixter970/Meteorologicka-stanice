const cities = [
    { name: "Praha", temperature: 8, weather: "oblačno" },
    { name: "Brno", temperature: 6, weather: "deštivo" },
    { name: "Ostrava", temperature: 4, weather: "mlha" },
    { name: "Litoměřice", temperature: 10, weather: "slunečno" },
    { name: "Žatec", temperature: 5, weather: "zataženo" },
    { name: "Ústí Nad Labem", temperature: 7, weather: "mlha" },
    { name: "Karlovy Vary", temperature: 11, weather: "oblačno" },
    { name: "Liberec", temperature: 9, weather: "deštivo" },
    { name: "Pardubice", temperature: 3, weather: "oblačno" },
    { name: "Most", temperature: 14, weather: "slunečno" },
    { name: "Hradec Králove", temperature: 2, weather: "deštivo" },
    { name: "Plzeň", temperature: 12, weather: "slunečno" },
    { name: "Olomouc", temperature: 6, weather: "mlha" },
    { name: "Český Budějovice", temperature: 10, weather: "mlha" },
    { name: "Zlín", temperature: -2, weather: "mrázivo" },
    { name: "Jihlava", temperature: 0, weather: "deštivo" },
];
 
 
function displayWeather(cityName) {
    const selectedCity = cities.find(city => city.name === cityName);
    const weatherContainer = document.getElementById("weather-container");
    weatherContainer.innerHTML = `
        <h2>Počasí:  ${selectedCity.name}</h2>
        <p>Teplota: ${selectedCity.temperature}°C</p>
        <p>Počasí: ${selectedCity.weather}</p>
    `;
}
 
const citySelector = document.getElementById("city");
cities.forEach(city => {
    const option = document.createElement("option");
    option.value = city.name;
    option.textContent = city.name;
    citySelector.appendChild(option);
});
 
 
citySelector.addEventListener("change", () => {
    const selectedCity = citySelector.value;
    displayWeather(selectedCity);
});
 
const updateButton = document.getElementById("update-btn");
updateButton.addEventListener("click", () => {
    const selectedCity = citySelector.value;
    displayWeather(selectedCity);
});