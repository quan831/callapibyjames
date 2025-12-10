# 🌤 Weather App (Node.js + Express + EJS)

Ứng dụng **Web Weather App** này sử dụng **Server-Side Rendering (SSR)** với **EJS** để hiển thị thông tin thời tiết trực tiếp từ server, không cần gọi API từ client.

---

## ✨ Tính năng

- ✅ Xem thời tiết hiện tại theo tên thành phố.
- ✅ **Server-Side Rendering**: Tải trang cực nhanh, tốt cho SEO.
- ✅ **Input Persistence**: Giữ lại tên thành phố sau khi tìm kiếm.
- ✅ Giao diện đẹp, responsive.
- ✅ Hỗ trợ **tiếng Việt**.

---

## 🛠 Công nghệ sử dụng

- **Node.js**: Runtime môi trường.
- **Express.js**: Web Framework mạnh mẽ.
- **EJS**: Template Engine cho SSR.
- **Axios**: Gọi OpenWeatherMap API từ server.
- **CSS**: Giao diện (đặt trong thư mục `views` để load cùng template).

---

## 📦 Cài đặt

1. **Clone repository:**
   ```bash
   git clone https://github.com/quan831/callapibyjames.git
   cd callapibyjames
   ```

2. **Cài đặt dependencies:**
   ```bash
   npm install
   ```
   *(Bao gồm: express, axios, cors, dotenv, ejs)*

---

## 🔐 Cấu hình

1. Lấy API Key miễn phí tại [OpenWeatherMap](https://openweathermap.org/api).
2. Tạo file `.env` tại thư mục gốc:
   ```env
   OPENWEATHER_API_KEY=your_api_key_here
   ```

---

## ▶️ Chạy ứng dụng

1. **Khởi động server:**
   ```bash
   node index.js
   # hoặc
   npm start
   ```

2. **Truy cập:**
   Mở trình duyệt vào địa chỉ: [http://localhost:3000](http://localhost:3000)

---

## 📁 Cấu trúc thư mục

```txt
callapibyjames/
│── index.js          # Logic Server (API call + Rendering)
│── package.json
│── .env.example      # Mẫu biến môi trường
│── views/            # Thư mục giao diện (Template + Assets)
│   │── index.ejs     # Giao diện chính (Template)
│   └── style.css     # CSS
└── readme.md
```

---

> Made with ❤️ by James
