#!/usr/bin/env node

import express from 'express'
import { routerControllers } from './src/routes/routes.js'

const app = express()
app.use(express.json())
app.disable('x-powered-by')

routerControllers.forEach((router) => app.use('/db', router))

app.use((req, res) => {
  return res.status(404).json({ message: "error 404 not font"})
})

const PORT = process.env.PORT ?? 3333
app.listen(PORT, () => {
  console.log('server => http://localhost:3333')
})
