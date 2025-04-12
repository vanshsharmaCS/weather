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

## 📸 Screenshots
![image](https://github.com/user-attachments/assets/a7d5fe51-2ef0-4c61-b3b0-6c3104947778)

![image](https://github.com/user-attachments/assets/25317142-a1d7-49b5-8a5e-2823676de688)



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

weather_api=2049ae390021f99a72ee91233cf66fcb

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


