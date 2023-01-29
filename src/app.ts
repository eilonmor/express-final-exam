import express from 'express';
import {Request, Response} from 'express'
import bodyParser from 'body-parser';
// import {  } from 'querystring';
const app = express();
// TODO implement me :)
const port = 3003

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


app.get('/', (req: Request, res: Response) => {
    res.send('Hello world!')
});

app.post('/bmi', (req: Request, res: Response) => {
    const weight: string = req.query.weight as string;
    const height:string = req.query.higth as string;
    const weightUnit : string = req.query.weightUnit  as string;
    const heightUnit  : string = req.query.heightUnit   as string;    
    console.log(weight, height, weightUnit, heightUnit);

});

app.post('/bmi', (req: Request, res: Response) => {
    const {weight, height, weightUnit, heightUnit} = req.body
    res.send({weight, height, weightUnit, heightUnit})

});

app.listen(port, ()=>{console.log(`server is rannning at http://localhost:${port}`)});

export default app;


