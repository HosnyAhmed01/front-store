import express, { Application } from 'express';
import bodyParser from 'body-parser';
import router from './router/index'; 

const app: Application = express();
const address: number = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


app.use('/' , router);
app.listen(3000, function () {
    console.log(`starting app on: ${address}`);
});

export default app;
