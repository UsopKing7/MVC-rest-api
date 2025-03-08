#!/usr/bin/env node

import { Router } from 'express'
import { pool } from './db-pool.routes.js'

export const routerDb = Router()

routerDb.post('/', async(req, res) => {
  const { name, brand, category } = req.body
  const [data] = await pool.query('INSERT INTO cellPhones (name, brand, category) VALUES (?, ?, ?)', [name, brand, category])
  return res.status(201).json({data})
})
