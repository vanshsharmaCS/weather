import React from 'react';
import './WeatherCard.css';

function WeatherCard({ data }) {
  return (
    <div className="weather-card">
      <img src={data.icon} alt="Weather icon" className="weather-icon" />
      <div className="weather-details">
        <div className="weather-item">🌥️ Condition: {data.condition}</div>
        <div className="weather-item">🌡️ Temperature: {data.temperature}K</div>
        <div className="weather-item">💧 Humidity: {data.humidity}%</div>
        <div className="weather-item">💨 WindSpeed: {data.windspeed} m/s</div>
      </div>
    </div>
  );
}

export default WeatherCard;

