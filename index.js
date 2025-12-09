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
app.use(express.static("public"));

// API: GET /api/weather?city=Hanoi
app.get("/api/weather", async (req, res) => {
    const city = req.query.city;

    if (!city) {
        return res.status(400).json({ error: "Thiếu city" });
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

        res.json({
            name: w.name,
            description: w.weather?.[0]?.description,
            temp: w.main.temp,
            humidity: w.main.humidity,
        });
    } catch (error) {
        console.error("Lỗi gọi OpenWeather:", error.message);
        if (error.response) {
            return res
                .status(error.response.status)
                .json({ error: error.response.data?.message || "Lỗi từ OpenWeather" });
        }
        res.status(500).json({ error: "Lỗi server" });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server chạy tại http://localhost:${PORT}`);
});