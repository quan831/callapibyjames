const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = 3000;

const API_KEY = process.env.OPENWEATHER_API_KEY;

if (!API_KEY) {
    console.error("Thiếu OPENWEATHER_API_KEY trong .env");
    process.exit(1);
}

app.use(cors());
app.set("view engine", "ejs");
app.use(express.static("views"));

// SSR Route: GET
app.get("/", async (req, res) => {
    const city = req.query.city;

    if (!city) {
        return res.render("index", { weather: null, error: null });
    }

    try {
        const response = await axios.get(
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

        const w = response.data;
        const weatherData = {
            name: w.name,
            description: w.weather?.[0]?.description,
            temp: w.main.temp,
            humidity: w.main.humidity,
        };

        res.render("index", { weather: weatherData, error: null });
    } catch (error) {
        console.error("Lỗi gọi OpenWeather:", error.message);
        let errorMsg = "Lỗi server";
        if (error.response) {
            errorMsg = error.response.data?.message || "Lỗi từ OpenWeather";
        }
        res.render("index", { weather: null, error: errorMsg });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server chạy tại http://localhost:${PORT}`);
});