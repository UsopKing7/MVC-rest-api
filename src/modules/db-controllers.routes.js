#!/usr/bin/env node

import { Router } from 'express'
import { pool } from './db-pool.routes.js'

export const routerDb = Router()

routerDb.post('/', async(req, res) => {
  try {
    const { name, brand, category } = req.body
    const [data] = await pool.query('INSERT INTO cellPhones (name, brand, category) VALUES (?, ?, ?)', [name, brand, category])
    return res.status(201).json({data})
  } catch (error) {
    return res.status(404).json({ message: error.errors})
  }
})
