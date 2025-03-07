#!/usr/bin/env node

import { Router  } from "express"
import apiProducts from '../../api.json' with { type: 'json'}

export const routerGet = Router()

routerGet.get('/', (req, res) => {
  console.log('petition resided...  ', req.url)
  const { id, name, brand } = req.query
  if (id) {
    const idProduct = apiProducts.find(products => products.id === Number(id))
    return res.status(200).json(idProduct)
  } else if (name) {
    const nameProduct = apiProducts.filter(products => products.name.toUpperCase() === name.toUpperCase())
    return res.status(200).json(nameProduct)
  } else if (brand) {
    const brandProduct = apiProducts.filter(products => products.brand.toUpperCase() === brand.toUpperCase())
    return res.status(200).json(brandProduct)
  } else {
    return res.status(200).json(apiProducts)
  }
})
