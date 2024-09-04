var express = require('express');
var router = express.Router();
const sql = require('../models/arvore.model')

/* GET users listing. */
router.get('/produto', function (req, res, next) {
  sql.getArvoreById().then((resposta) => {
    if (resposta instanceof Error) {
      res.status(500).send(resposta);
      return;

    }
    res.status(200).json(resposta)
  })
});

router.get('/arvore/:id', function (req, res, next) {

  sql.getArvoreById(req.params.id).then((resposta) => {
    if (resposta instanceof Error) {
      res.status(500).send(resposta);
      return;
    }
    res.status(200).json(resposta)
  })

})



//adiciona a arvore
router.post('/add',(req,res)=>{
  //guarda as informações em uma variavel para
  //facilitar o acesso
  let dados = req.body.info;
  console.log(dados)
  sql.addArvore(
    dados.defensiva,
    dados.fertilizante,
    dados.ultima_verificacao,
    dados.tipo,
    dados.situacao,
  
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
  sql.buscaTodosArvore().then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).json(resposta);
      return;
    }
    res.status(200).json(resposta)
  })


})

module.exports = router;
