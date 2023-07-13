import https from "https";
// import dotenv from "dotenv";
// dotenv.config();

export const getWeather = async (req, res) => {
  const { cities } = req.body;

  if (!cities || !Array.isArray(cities)) {
    return res.status(400).send("Invalid cities parameter");
  }

  const apiKey = "497a5c544e033c02d8fa9ae32940297d";
  const unit = "metric";
  const weatherData = [];

  const fetchWeatherData = (city) => {
    return new Promise((resolve, reject) => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;

      https
        .get(url, (response) => {
          let data = "";

          response.on("data", (chunk) => {
            data += chunk;
          });

          response.on("end", () => {
            try {
              const weather = JSON.parse(data);
              if (weather.cod && weather.cod !== 200) {
                reject(new Error(weather.message || "Unknown error occurred"));
              } else {
                const temp = weather.main.temp;
                const weatherDescription = weather.weather[0].description;
                resolve({ city, temp, weatherDescription });
              }
            } catch (error) {
              reject(error);
            }
          });
        })
        .on("error", (error) => {
          reject(error);
        });
    });
  };

  try {
    const fetchWeatherPromises = cities.map(fetchWeatherData);
    const weatherResults = await Promise.all(fetchWeatherPromises);
    res.json(weatherResults);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    res.status(500).send("An error occurred while fetching weather data.");
  }
};
