#!/usr/bin/env node

import { Router  } from "express"
import { pool } from '../../src/modules/db-pool.routes.js'
export const routerGet = Router()

routerGet.get('/', async(req, res) => {
  try {
    console.log('petition resided...  ', req.url)
    const { id, name, brand, category } = req.query
    let query = 'SELECT * FROM cellPhones'
    let params = []
  
    if (id) {
      query = 'SELECT * FROM cellPhones WHERE id = ?';
      params = [id]
    } else if (name) {
      query = 'SELECT * FROM cellPhones WHERE name = ?'
      params = [name.toUpperCase()]
    } else if (brand) {
      query = 'SELECT * FROM cellPhones WHERE brand = ?'
      params = [brand.toUpperCase()]
    } else if (category) {
      query = 'SELECT * FROM cellPhones WHERE category = ?'
      params = [category.toUpperCase()]
    }
  
    const [data] = await pool.query(query, params)
    return res.status(200).json({data})

  } catch (error) {
    return res.status(500).json({ message: 'error del dato del cellPhone', error: error.message})
  }
})
