# 🌦️ Real-Time Weather Dashboard

A responsive web application that allows users to get real-time weather data by entering a city name. Built with the **MERN stack** (MongoDB, Express, React, Node.js) and OpenWeatherMap API.

---

## 🚀 Features

- 🔍 Search weather by city name
- 📡 Fetches live data from [OpenWeatherMap API](https://openweathermap.org/)
- 🌡️ Displays temperature, humidity, wind speed, and weather condition with icons
- 🌗 Light / Dark Mode toggle
- 📱 Responsive and clean UI

---

## 🛠️ Tech Stack

- **Frontend**: React, Axios, CSS
- **Backend**: Node.js, Express
- **API**: OpenWeatherMap
- **Others**: dotenv, cors

---




## 📁 Folder Structure

weather_dashboard/
├── client/    
├── server/       
├── .gitignore    
└── README.md

⚙️ 2. Setup backend
cd server
npm install

Create a .env file in the server/ directory and add your OpenWeatherMap API key:

weather_api=6345874f7aa8ca0a81a745cf33132fa7;

Start the backend server:

node server.js

🌐 3. Setup frontend
In a new terminal:

cd client
npm install
npm start

Open http://localhost:3000 in your browser.

✅ TODO / Improvements
 Add 5-day forecast

 Add city autocomplete

 Store search history using localStorage

 Add animations and loading spinners

🙋‍♂️ Author
Madhav Sharma
GitHub: @Madhav0105

📄 License
This project is licensed under the MIT License.


