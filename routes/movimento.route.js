var express = require('express');
var router = express.Router();
const sql = require('../models/movimento.model')



//adiciona ao Movimento
router.post('/add',(req,res)=>{
  //guarda as informações em uma variavel para
  //facilitar o acesso
  let dados = req.body.info;
  console.log(dados)
  sql.addMovimento(
    dados.tipo,
    dados.quantidade,
    dados.produto
  ).then((resposta)=>{
    console.log(resposta)
    if(resposta instanceof Error){
      res.status(500).json(resposta);
      return
    }
    res.status(201).json(resposta)
    
  })
})

router.get('/buscaTodos',(req,res)=>{
  sql.buscaTodosMovimento().then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).json(resposta);
      return;
    }
    res.status(200).json(resposta)
  })


})

module.exports = router;
