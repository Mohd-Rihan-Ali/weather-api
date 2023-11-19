# Weather API

Welcome to the Weather API repository! This API allows users to easily retrieve current weather conditions for any city around the globe. Whether you're building a weather app, integrating weather information into your website, or just curious about the current conditions in a specific location, this API has you covered.

## Getting Started

To get started, follow these simple steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Mohd-Rihan-Ali/weather-api.git
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd weather-api
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Obtain API Key:**
   To use this API, you'll need an API key from OpenWeatherMap. You can obtain a free API key by signing up at [OpenWeatherMap](https://openweathermap.org/api).

5. **Set API Key:**
   Open the `.env` file in the project root directory and replace `<YOUR_API_KEY>` with your actual OpenWeatherMap API key.
   ```env
   API_KEY=<YOUR_API_KEY>
   ```

6. **Run the Application:**
   ```bash
   npm start
   ```
   This will start the server, and you can access the API at `http://localhost:3000`.

## API Endpoints

### 1. Get Weather by City Name

- **Endpoint:**
  ```http
  GET /weather/city/:cityName
  ```

- **Example:**
  ```http
  GET http://localhost:3000/weather/city/London
  ```

### 2. Get Weather by Coordinates

- **Endpoint:**
  ```http
  GET /weather/coordinates/:lat/:lon
  ```

- **Example:**
  ```http
  GET http://localhost:3000/weather/coordinates/51.51/-0.13
  ```

## Response Format

The API returns JSON-formatted responses with information about the current weather conditions, including temperature, humidity, and more.

```json
{
  "city": "London",
  "country": "GB",
  "temperature": 15.3,
  "humidity": 70,
  "description": "Cloudy",
  "icon": "04d"
}
```

## Contributing

If you find a bug, have a feature request, or would like to contribute, please open an issue or submit a pull request. Your contributions are always welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Thank you for using the Weather API! If you have any questions or need assistance, feel free to reach out. Stay weather-informed! 🌦️
