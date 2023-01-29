import type { NextFunction, Request, Response } from 'express';
import { send } from 'process';


/**
 * The middleware should check if the payload valid
 * @param req
 * @param res
 * @param next
 */
export default function validator(req: Request, res: Response, next: NextFunction) {
    // TODO implement me
    const local = `http://localhost:${3002}`
    const weight: string = req.query.weight as string;
    const height:string = req.query.higth as string;
    const weightUnit : string = req.query.weightUnit  as string;
    const heightUnit  : string = req.query.heightUnit   as string;    
    
    function castNumber(str:string):boolean{
        if (Number.isNaN(Number(str))){
            return false
        }else{return true}   
    }
    if (castNumber(weight) === false || castNumber(height) === false || castNumber(weightUnit) === false || castNumber(heightUnit) === false){
        res.status(400).send(`you write a non valide Eror`)
    }
    next()

    




}
