const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app=express();
const port=2030;
app.use(cors());

app.get('/weather',async (req,res)=>{
    const city=req.query.city;
    if(!city) return res.status(400).json({error:'city is required'});
    try{
        const apiKey=process.env.weather_api;
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        const response=await axios.get(url);
        // res.send(response.data);
        const {main,weather,wind}=response.data;
        const data={
            temperature: main.temp,
            condition: weather[0].main,
            icon: `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
            humidity: main.humidity,
            windspeed: wind.speed,

        };
        res.json(data);
    } catch (error) {
    res.status(500).json({ error: 'Could not fetch weather data' });
  }
});

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});