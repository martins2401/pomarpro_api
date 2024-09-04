

const conexao = require('../database/connection.database');
//busca todos os usuarios do banco de dados
async function getProdutoById(){
    try{
        const [linhas] = await conexao.query(`
        select * from tb_Produtos
        `) 
        return linhas;
 } catch(erro){
        return erro;

    }
}
async function getProdutosById(id){
    try{
        const [linhas] = await conexao.query(`
        select * from tb_produtos where id = ?
        `,[id]) 
        return linhas;
 } catch(erro){
        return erro;

    }
}

//insere um usuario no banco de dados
async function addProduto(descricao,unid_medida,valor,tipo){
    try{
        const [exec] = await conexao.query(`
        insert into tb_produtos(
        descriçao,unid_medida,valor,tb_tipo_id)values(
        ?,?,?,?)
        `,[descricao,unid_medida,valor,tipo]) 
        return exec.affecteRows;
 } catch(erro){
        return erro;

    }
}


  async function buscaTodosProdutos(){
    try{
        let [linhas] = await conexao.query(`
            select
            u.id,
            u.descriçao as descricao,
            u.unid_medida,
            u.valor,
            u.tb_tipo_id as tipo
            from tb_produtos u;
        `)
        //retorna valores buscados do banco
        return linhas;

    }catch(e){
        //retorna o erro que aconteceu 
        return(e);
    }
}

module.exports = {
    getProdutosById,
    getProdutosById,
    addProduto,
    buscaTodosProdutos
}