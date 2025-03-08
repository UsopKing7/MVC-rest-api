#!/usr/bin/env node

import { Router } from "express"
import { validation } from "./validation.routes.js"
import { pool } from '../modules/db-pool.routes.js';

export const routerPost = Router()

routerPost.post('/', async(req, res) => {
  try {
    const newCellPhone = validation.parse(req.body)
    const { name, brand, category } = newCellPhone
    const [data] = await pool.query('INSERT INTO cellPhones (name, brand, category) VALUES (?, ?, ?)', [name, brand, category])
    return res.status(201).json({data})
  } catch (error) {
    return res.status(404).json({ message: error.errors})
  }
})
