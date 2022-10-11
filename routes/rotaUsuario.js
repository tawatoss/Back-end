const express = require('express');
const router = express.Router();

//para consultar todos os dados
router.get('/',(req,res,next)=>{
    res.status(200).send({
        mensagem:"aqui é a lista de usuários!!!!",
        nome:"carlos"
      })
})
//para consultar um determinado cadastro
router.get('/:id',(req,res,next)=>{
    const id = req.params.id;
    res.status(200).send({
        mensagem:`aqui é a lista de um usuário com id:${id}`,
        nome:"carlos"
      })
})
// para enviar dados para salvar no banco
router.post('/',(req,res,next)=>{
          const nome = req.body.nome;
          const email = req.body.email;
          const senha = req.body.senha;
          res.status(201).send({
            
          })
})

module.exports = router;

