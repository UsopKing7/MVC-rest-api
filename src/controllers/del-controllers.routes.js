#!/usr/bin/env node

import { Router } from 'express'
import { pool } from '../modules/db-pool.routes.js'

export const routerDel = Router()

routerDel.delete('/', async (req, res) => {
  try {
    const { id } = req.query

    if (id) {
      const query = 'DELETE FROM cellPhones WHERE id = ?'
      const params = [id]
      const [data] = await pool.query(query, params)
      if (data.affectedRows === 0) {
        return res.status(404).json({ message: 'Cell Phones no existent'})
      }
      return res.status(204).json({data})
    }
  } catch (error) {
    return res.status(500).json({ message: 'error 500 ' + error.message})
  }
})
