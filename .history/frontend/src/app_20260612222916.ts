import express, { Application, Request, Response } from 'express';


import { IndexRoutes } from './app/routes';
const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1", IndexRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
}
);


// app.get('/', async (req: Request, res: Response) => {
//     const category = await prisma.category.create({
//         data: {
//             name: 'Motherboard',
//             description: 'A computer motherboard'
//         }
//     })
//     res.status(201).json({
//         success: true,
//         message: 'Category created successfully',
//         data: category
//     })
// })

export default app;