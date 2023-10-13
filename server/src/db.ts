import { Pool } from 'pg';

const pool = new Pool({
  user: 'todo_user',
  host: 'postgres',  // Service name in docker-compose.yml
  database: 'todo_db',
  password: 'todo_password',
  port: 5432,
});

export default pool;
