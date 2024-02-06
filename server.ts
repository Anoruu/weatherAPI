import express, {Request, Response } from 'express';
import { parse } from 'path';

import { WeatherController } from './WeatherController';

const app = express();
const API_KEY = "90dc508c87c44caf8d5135453240102";


const PORT: number = process.env.PORT ? parseInt(process.env.PORT): 3000;

app.get("/test", (req:Request, res:Response) => {
    res.send("serv yes");
})


//creer la route qui va utiliser le controller meteo pour faire la request 

const weatherController = new WeatherController(API_KEY);

app.get("/weather/:city", async ( req:Request, res:Response) => {
    await weatherController.getWeather(req, res);
})

app.listen(PORT, () => {

    console.log(`listening on port ${PORT}`)

})

