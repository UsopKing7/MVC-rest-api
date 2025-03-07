#!/usr/bin/env node

import { Router } from 'express'
import { pool } from './db-pool.routes.js'

export const routerDb = Router()

routerDb.get('/', async(req, res) => {
  console.log('Consult...  ', req.url)
  const [data] = await pool.query('SELECT 10 * 10 AS result')
  return res.status(200).json(data[0])
})