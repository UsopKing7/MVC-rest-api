#!/usr/bin/env node

import { Router } from 'express'
import { pool } from './db-pool.routes.js'

export const routerDb = Router()

routerDb.post('/', async(req, res) => {
  const { name, brand } = req.body
  const [data] = await pool.query('INSERT INTO productos (name, brand) VALUES (?, ?)', [name, brand])
  return res.status(201).json({data})
})
