const axios = require("axios");
require("dotenv").config();

const API_KEY = process.env.OPENWEATHER_API_KEY;

if (!API_KEY) {
    console.error("Thiếu OPENWEATHER_API_KEY trong .env");
    process.exit(1);
}

// Lấy city từ command line
const city = process.argv.slice(2).join(" ");

if (!city) {
    console.log("Cách dùng:");
    console.log('node index.js "Hanoi"');
    console.log('node index.js "Ho Chi Minh"');
    process.exit(0);
}

async function getWeather(city) {
    try {
        const res = await axios.get(
            "https://api.openweathermap.org/data/2.5/weather",
            {
                params: {
                    q: city,
                    appid: API_KEY,
                    units: "metric",
                    lang: "vi",
                },
            }
        );

        const w = res.data;

        console.log(`\n📍 ${w.name}`);
        console.log(`🌤 Thời tiết: ${w.weather[0].description}`);
        console.log(`🌡 Nhiệt độ: ${w.main.temp}°C`);
        console.log(`💧 Độ ẩm: ${w.main.humidity}%`);
    } catch (err) {
        if (err.response) {
            console.log("Lỗi API:", err.response.data.message);
        } else {
            console.log("Lỗi:", err.message);
        }
    }
}

// chạy
getWeather(city);
