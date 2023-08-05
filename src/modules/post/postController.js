import { Router } from "express"
import { verifyAcessToken } from "../../utils/auth"

const router = Router()

router.post('/', verifyAcessToken, (req, res) => {
  res.send('CREATE POST /')
})

router.get('/:id?', verifyAcessToken, (req, res) => {
  //DUA OPÇÕES: LISTAR TODOS OU APENAS UM
  res.send('GET POST /')
})

export default router