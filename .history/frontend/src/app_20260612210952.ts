import express, { Application, Request, Response } from 'express';
import { prisma } from './app/lib/prisma';
const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
}
);


app.get('/', async (req: Request, res: Response) => {
    const category = await prisma.category.create({
        data: {
            
        }
    })
})

export default app;