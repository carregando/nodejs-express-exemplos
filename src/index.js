import * as express from 'express'

const app = express()

import userController from './controller/userController'
import postController from './controller/postController'

/*
* USUARIO:
-Cadastro
-Login
-
* POSTS:
-Criar posts
-Listar posts
*/

app.use('/user', userController)
app.use('/post', postController)



app.listen(3000, () => console.log('ONLINE http://localhost:3000'))