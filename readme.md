# 🌤 Weather CLI App (Node.js)

Ứng dụng **Command Line Interface (CLI)** đơn giản viết bằng **Node.js** để xem **thời tiết hiện tại** của các thành phố trên thế giới, sử dụng **OpenWeatherMap API**.

---

## ✨ Tính năng

- ✅ Nhập **tên thành phố từ command line**
- ✅ Hiển thị nhiệt độ, độ ẩm, mô tả thời tiết
- ✅ Hỗ trợ **tiếng Việt**

---

## 🛠 Công nghệ sử dụng

- **Node.js**
- **Axios** (HTTP client)
- **dotenv** (quản lý biến môi trường)
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

1. Đăng ký và lấy API key tại: [https://openweathermap.org/api](https://openweathermap.org/api)
2. Tạo file `.env` ở thư mục gốc:

```env
OPENWEATHER_API_KEY=your_api_key_here
```

📌 **Lưu ý:** Không commit file `.env` lên GitHub.

---

## ▶️ Chạy bằng npm script

```bash
npm start Hanoi
npm start "Ho Chi Minh"
```

---

## 📤 Kết quả mẫu

```text
📍 Hanoi
🌤 Thời tiết: mây rải rác
🌡 Nhiệt độ: 28°C
💧 Độ ẩm: 70%
```

---

## 📁 Cấu trúc thư mục

```txt
callapibyjames/
│── index.js
│── package.json
│── package-lock.json
│── .gitignore
│── .env.example
```

---

> Made with ❤️ by James

