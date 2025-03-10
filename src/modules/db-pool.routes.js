#!/usr/bin/env node

import { createPool } from "mysql2/promise"

export const pool = createPool({
  host: "localhost", // db, Para docker
  port: 3306, // port de la base de datos
  user: 'root', // user de la base de datos
  password: '', // las credenciales de tu  base de datos
  database: 'cellPhonesCompany' // nombre de la base de datos
})
