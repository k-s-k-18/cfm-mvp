import express from 'express';
import config from './config/config';
import authRouter from './routes/authRoutes';
import plaidRouter from './routes/plaid/plaidRoutes'



const app = express();

app.use(express.json());

app.use('/auth',authRouter);
app.use('/plaid',plaidRouter);

app.listen(config.port,()=>{
    console.log(`Server running on port ${config.port}`);
})