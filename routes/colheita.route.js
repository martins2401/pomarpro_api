var express = require('express');
var router = express.Router();
const sql = require('../models/colheita.model')

/* GET users listing. */
router.get('/produto', function (req, res, next) {
  sql.getColheitaById().then((resposta) => {
    if (resposta instanceof Error) {
      res.status(500).send(resposta);
      return;

    }
    res.status(200).json(resposta)
  })
});

router.get('/colheita/:id', function (req, res, next) {

  sql.getColheitaById(req.params.id).then((resposta) => {
    if (resposta instanceof Error) {
      res.status(500).send(resposta);
      return;
    }
    res.status(200).json(resposta)
  })

})



//adiciona ao colheita
router.post('/add',(req,res)=>{
  //guarda as informações em uma variavel para
  //facilitar o acesso
  let dados = req.body.info;
  console.log(dados)
  sql.addColheita(
    dados.quantidade,
    dados.arvore,
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
  sql.buscaTodosColheita().then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).json(resposta);
      return;
    }
    res.status(200).json(resposta)
  })


})

module.exports = router;
