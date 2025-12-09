# 🌤 Weather App (Node.js + Express)

Ứng dụng **Web Weather App** viết bằng **Node.js + Express** giúp xem **thời tiết hiện tại** của các thành phố trên thế giới thông qua giao diện web (không còn CLI), sử dụng **OpenWeatherMap API**.

---

## ✨ Tính năng

- ✅ Nhập **tên thành phố trên giao diện web**
- ✅ Hiển thị nhiệt độ, độ ẩm, mô tả thời tiết
- ✅ Hỗ trợ **tiếng Việt**

---

## 🛠 Công nghệ sử dụng

- **Node.js**
- **Express.js** (Backend API)
- **Axios** (HTTP client)
- **dotenv** (quản lý biến môi trường)
- **HTML / CSS / JavaScript** (Frontend)
- **OpenWeatherMap API**

---

## 📦 Cài đặt

Clone repository:

```bash
git clone https://github.com/quan831/callapibyjames.git
cd callapibyjames
```

Cài dependencies:

```bash
npm install
```

---

## 🔐 Cấu hình API key

1. Đăng ký và lấy API key tại: https://openweathermap.org/api
2. Tạo file `.env` ở thư mục gốc:

```env
OPENWEATHER_API_KEY=your_api_key_here
```

📌 **Lưu ý:** Không commit file `.env` lên GitHub.

---

## ▶️ Chạy ứng dụng

```bash
npm start
```

Mở trình duyệt và truy cập:

```text
http://localhost:3000
```

---

## 🖥 Giao diện mẫu

- Nhập tên thành phố (vd: `Hanoi`, `Ho Chi Minh`)
- Nhấn **Xem** để hiển thị thời tiết hiện tại

---

## 📁 Cấu trúc thư mục

```txt
callapibyjames/
│── index.js          # Server Express + Weather API
│── package.json
│── package-lock.json
│── .gitignore
│── .env.example
│── readme.md
└── public/
    │── index.html
    └── styles.css
```

---

> Made with ❤️ by James

