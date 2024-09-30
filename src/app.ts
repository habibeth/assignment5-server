import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";
import cookieParser from 'cookie-parser';
const app: Application = express()


app.use(express.json());
app.use(cookieParser())
app.use(cors({ origin: true, credentials: true }));


app.use('/api/v1', router)

app.get('/', (req: Request, res: Response) => {
    res.send('Server Running Now!')
})


app.use(globalErrorHandler);

//Not Found
app.use(notFound);


export default app