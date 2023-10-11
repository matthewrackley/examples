import express from 'express';
import pool from './db';
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.get('/todos', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM todos');
    res.json(rows);
  } catch (err) {
    res.status(500).json(err);
  }
});
