


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
}
);