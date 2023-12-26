import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Hello, developers! Sejam bem-vindos(as) ao TypeScript com Express.js!</h1>');
});

app.listen(PORT, () => console.log(`Servidor executando na porta ${PORT}`));