import { routerGet } from '../controllers/get-controllers.routes.js'
import { routerPost } from '../controllers/post-controllers.routes.js'
import { routerDel } from '../controllers/del-controllers.routes.js'
import { routerPatch } from '../controllers/pathc-controllers.routes.js'

export const routerControllers = [
  routerGet,
  routerPost,
  routerDel, 
  routerPatch
]

