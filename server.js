#!/usr/bin/env node

import express from 'express'
import { routerGet } from './src/controllers/get-controllers.routes.js'
import { routerPost } from './src/controllers/post-controllers.routes.js'
import { routerDb } from './src/modules/db-controllers.routes.js';

const app = express()
app.use(express.json())

app.use('/db', routerDb)
app.use('/moduls', routerPost)
app.use('/moduls', routerGet)

const port = process.env.PORT ?? 3333
app.listen(port, () => {
  console.table('server => http://localhost:3333')
})
