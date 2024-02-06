import { NextFunction, Request, Response } from "express";

export class weatherError extends Error {
    constructor(message: string){
        super(message);
        this.name = "WeatherError";
    }
}

    export function errorHandler(err: Error, req: Request, res: Response,
        next: NextFunction){
            console.log(err.stack);
                if(err instanceof weatherError){
            res.status(500).json({error : err.message})
                }else {
            res.status(500).json({error : "Erreur inatendue"})
        }
    }