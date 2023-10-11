import { Pool } from 'pg';

const pool = new Pool({
  user: 'database_user',
  host: 'postgres',  // Service name in docker-compose.yml
  database: 'todo_db',
  password: 'password',
  port: 5432,
});

export default pool;
