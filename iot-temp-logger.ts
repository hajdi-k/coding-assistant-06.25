import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

// Generate a mock indoor temperature between 18°C and 27°C
function getMockIndoorTemperature(): number {
  return +(Math.random() * (27 - 18) + 18).toFixed(1);
}

// Fetch outdoor temperature from OpenWeather API
async function getOutdoorTemperature(lat: number, lon: number): Promise<number | null> {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  if (!apiKey) {
    console.error('OpenWeather API key not set in .env');
    return null;
  }
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    const response = await axios.get(url);
    return response.data.main.temp;
  } catch (error) {
    console.error('Error fetching outdoor temperature:', error);
    return null;
  }
}

// Main function to compare and log temperatures
async function logTemperatureComparison() {
  const indoorTemp = getMockIndoorTemperature();
  // Example: Oslo, Norway (59.91, 10.75)
  const lat = 59.91;
  const lon = 10.75;
  const outdoorTemp = await getOutdoorTemperature(lat, lon);

  if (outdoorTemp === null) {
    console.log('Could not fetch outdoor temperature.');
    return;
  }

  const difference = +(indoorTemp - outdoorTemp).toFixed(1);
  console.log(`Indoor temperature:  ${indoorTemp}°C`);
  console.log(`Outdoor temperature: ${outdoorTemp}°C`);
  console.log(`Difference:         ${difference}°C`);
  console.log('---');
}

// Poll every 10 seconds
setInterval(logTemperatureComparison, 10000);

// Initial call
logTemperatureComparison();
