import express, { Express } from 'express';
import { randomString, formatDate } from './utils/';  // Some utility functions you would write
import pool from './db';
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

//__||---| TODO API |---||__\\
app.get('/todos', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM todos');
    res.json(rows);
  } catch (err) {
    res.status(500).json(err);
  }
});
/**
 * @function app.post - Create a new todo
 */
app.post('/todos', async (req, res) => {
  try {
    const { title } = req.body;  // Assume title is sent in request body
    const { rows } = await pool.query('INSERT INTO todos (title) VALUES ($1) RETURNING *', [title]);
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json(err);
  }
});

/**
 * @function app.get - Get all todos
 */
app.get('/todos', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM todos');
    res.json(rows);
  } catch (err) {
    res.status(500).json(err);
  }
});
/**
 * @function app.get - Get a todo by id
 */
app.get('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query('SELECT * FROM todos WHERE id = $1', [id]);
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json(err);
  }
});
/**
 * @function app.put - Update a todo by id
 */
app.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;  // Assume title and completed status are sent in request body
    const { rows } = await pool.query('UPDATE todos SET title = $1, completed = $2 WHERE id = $3 RETURNING *', [title, completed, id]);
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json(err);
  }
});
/**
 * @function app.delete - Delete a todo by id
 */
app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM todos WHERE id = $1', [id]);
    res.json({ message: "TODO was deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
});

//__||---| USERS API |---||__\\
app.post('/users', async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const now = new Date();
    const customID = `${randomString(2, true)}${formatDate(now)}-${randomString(14)}-${formatDate(now, 'HHMMSS')}-${randomString(22)}`;

    const { rows } = await pool.query('INSERT INTO users (custom_id, username, password, email, created_at) VALUES ($1, $2, $3, $4, $5) RETURNING *', [customID, username, password, email, now]);
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json(err);
  }
});
