#!/usr/bin/env node
import { Router } from 'express'
import { pool } from '../modules/db-pool.routes.js'
import { validation } from './validation.routes.js'

export const routerPatch = Router()

routerPatch.patch('/', async (req, res) => {
  try {
    const { id } = req.query
    const { name, brand, category } = req.body  

    if (!id) {
      return res.status(400).json({ message: 'ID is required' }) 
    }

    let query = 'SELECT * FROM cellPhones WHERE id = ?'
    let params = [id]
    const [data] = await pool.query(query, params)

    if (!data.length) {
      return res.status(404).json({ message: "Cell phone not found" })
    }

    query = 'UPDATE cellPhones SET name = ?, brand = ?, category = ? WHERE id = ?'
    params = [name || data[0].name, brand || data[0].brand, category || data[0].category, id]

    const [result] = await pool.query(query, params)

    if (result.affectedRows === 0) {
      return res.status(400).json({ message: "Failed to update cell phone" })
    }

    return res.status(200).json({ message: "Cell phone updated successfully" })

  } catch (error) {
    return res.status(500).json({ message: "Error 500: " + error })
  }
})
0