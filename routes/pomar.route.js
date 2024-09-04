var express = require('express');
var router = express.Router();
const sql = require('../models/pomar.model')

/* GET users listing. */
router.get('/usuarios', function (req, res, next) {
  sql.getPomarById().then((resposta) => {
    if (resposta instanceof Error) {
      res.status(500).send(resposta);
      return;

    }
    res.status(200).json(resposta)
  })
});

router.get('/usuario/:id', function (req, res, next) {

  sql.getPomarById(req.params.id).then((resposta) => {
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
  sql.addPomar(info.nome, info.sobrenome, info.endereco, info.telefone, info.email, info.login, info.senha
  ).then((resposta) => {
    if (resposta instanceof Error) {
      res.status(500).json(resposta);
      return;
    }
    res.status(201).json(resposta);
  })
})


//adiciona ao Pomar
router.post('/add',(req,res)=>{
  //guarda as informações em uma variavel para
  //facilitar o acesso
  let dados = req.body.info;

  sql.addPomar(
    dados.apelido,
    dados.num_linha,
    dados.num_coluna,
  ).then((resposta)=>{

    if(resposta instanceof Error){
      res.status(500).json(resposta);
      return
    }
    res.status(201).json(resposta)
    
  })
})

router.get('/buscaTodos',(req,res)=>{
  sql.buscaTodosPomar().then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).json(resposta);
      return;
    }
    res.status(200).json(resposta)
  })


})

module.exports = router;
