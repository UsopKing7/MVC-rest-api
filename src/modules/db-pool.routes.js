#!/usr/bin/env node

import { createPool } from "mysql2/promise"
import { DB_HOST, DB_PORT, DB_DATABASE, DB_USER, DB_PASSWORD} from './configDb.js';

export const pool = createPool({
  host: DB_HOST, // db, Para docker
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE
})
