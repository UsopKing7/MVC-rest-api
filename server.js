#!/usr/bin/env node

import express from 'express'
import { routerControllers } from './src/controllers/routes.js'
import { routerDb } from './src/modules/db-controllers.routes.js'

const app = express()
app.use(express.json())

routerControllers.forEach((router) => app.use('/moduls', router))
app.use('/db', routerDb)

const port = process.env.PORT ?? 3333
app.listen(port, () => {
  console.log('server => http://localhost:3333')
})
