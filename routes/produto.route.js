var express = require('express');
var router = express.Router();
const sql = require('../models/produto.model')

/* GET users listing. */
router.get('/produto', function (req, res, next) {
  sql.getprodutos().then((resposta) => {
    if (resposta instanceof Error) {
      res.status(500).send(resposta);
      return;

    }
    res.status(200).json(resposta)
  })
});

router.get('/produto/:id', function (req, res, next) {

  sql.getProdutosById(req.params.id).then((resposta) => {
    if (resposta instanceof Error) {
      res.status(500).send(resposta);
      return;
    }
    res.status(200).json(resposta)
  })

})



//adiciona ao Produto
router.post('/add',(req,res)=>{
  //guarda as informações em uma variavel para
  //facilitar o acesso
  let dados = req.body.info;

  sql.addProduto(
    dados.descricao,
    dados.unid_medida,
    dados.valor,
    dados.tipo
  ).then((resposta)=>{

    if(resposta instanceof Error){
      res.status(500).json(resposta);
      return
    }
    res.status(201).json(resposta)
    
  })
})

router.get('/buscaTodos',(req,res)=>{
  sql.buscaTodosProdutos().then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).json(resposta);
      return;
    }
    res.status(200).json(resposta)
  })


})

module.exports = router;
