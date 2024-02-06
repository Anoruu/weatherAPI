import express, {NextFunction, Request, Response } from 'express';
import { parse } from 'path';
import dotenv from 'dotenv';
import { WeatherController } from './controller/WeatherController';
import { errorHandler } from './middleware/errorHandler';
import { API_KEY } from './constantes/config';
dotenv.config();

const app = express();
const weather_controller = new WeatherController(API_KEY);



const PORT: number = process.env.PORT ? parseInt(process.env.PORT): 3000;

app.get("/test", (req:Request, res:Response) => {
    res.send("serv yes");
})


//creer la route qui va utiliser le controller meteo pour faire la request 

const weatherController = new WeatherController(API_KEY);

app.get("/weather/:city", async ( req:Request, res:Response, next:NextFunction) => {
    await weatherController.getWeather(req, res, next);
})

app.use(errorHandler);

app.listen(PORT, () => {

    console.log(`listening on port ${PORT}`)

})

