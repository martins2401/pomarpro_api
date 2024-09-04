var express = require('express');
var router = express.Router();
const sql = require('../models/material.model')

/* GET users listing. */
router.get('/usuarios', function (req, res, next) {
  sql.getMaterailById().then((resposta) => {
    if (resposta instanceof Error) {
      res.status(500).send(resposta);
      return;

    }
    res.status(200).json(resposta)
  })
});

router.get('/usuario/:id', function (req, res, next) {

  sql.getMaterailById(req.params.id).then((resposta) => {
    if (resposta instanceof Error) {
      res.status(500).send(resposta);
      return;
    }
    res.status(200).json(resposta)
  })

})

//insira um usuario no banco de dados
router.post('/usuario', function (req, res) {
  let info = req.body;
  sql.addUsuario(info.nome, info.sobrenome, info.endereco, info.telefone, info.email, info.login, info.senha
  ).then((resposta) => {
    if (resposta instanceof Error) {
      res.status(500).json(resposta);
      return;
    }
    res.status(201).json(resposta);
  })
})


//adiciona ao Material
router.post('/add',(req,res)=>{
  //guarda as informações em uma variavel para
  //facilitar o acesso
  let dados = req.body.info;

  sql.addMaterial(
    dados.nome,
    dados.valor,
    dados.tipo,
    dados.fornecedor
  ).then((resposta)=>{

    if(resposta instanceof Error){
      res.status(500).json(resposta);
      return
    }
    res.status(201).json(resposta)
    
  })
})

router.get('/buscaTodos',(req,res)=>{
  sql.buscaTodosMateriais().then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).json(resposta);
      return;
    }
    res.status(200).json(resposta)
  })


})

module.exports = router;
