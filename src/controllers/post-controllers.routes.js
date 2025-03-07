#!/usr/bin/env node

import { Router } from "express"
import apiProduct from "../../api.json" with { type: 'json'}
import { validation } from "./validation.routes.js"

export const routerPost = Router()

routerPost.post('/', async(req, res) => {
  const data = await validation.parse(req.body)
  apiProduct.push(data)
  if (data) {
    return res.status(200).json(data)
  } else {
    return res.status(404).json({ message: "not create"})
  }
})