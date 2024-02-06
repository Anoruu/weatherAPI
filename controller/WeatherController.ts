import axios, {AxiosResponse} from "axios";
import {NextFunction, Request, Response} from "express";
import { weatherError } from "../middleware/errorHandler";
import { WEATHER_API_ERROR_MESSAGE } from "../constantes/errorMessages";
import { log } from "console";

export class WeatherController {
    private API_KEY:string;

    constructor(apiKey: string){
        this.API_KEY = apiKey;

    }

    public async getWeather(req: Request, res: Response, next: NextFunction):Promise <void>{
        console.log(this.API_KEY);

        
        const city:string= req.params.city;
        console.log(city)
        try{
            const response : AxiosResponse = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${this.API_KEY}&q=${city}&lang=fr`);
            const data = response.data;
            res.json(data);
        }catch(error){
            next(new weatherError(WEATHER_API_ERROR_MESSAGE))
        }
    }
}

