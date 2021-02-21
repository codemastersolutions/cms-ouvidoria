import express from 'express';

const app = express();
const port = 3333;
const host = '0.0.0.0';

app.get('/', (_req, res) => res.json({ message: 'Hello Word' }));

app.listen(port, host, () => {
  console.log(`Server listening at http://${host === '0.0.0.0' ? 'localhost' : host}:${port}`);
});
