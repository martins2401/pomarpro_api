

const conexao = require('../database/connection.database');
//busca todos os usuarios do banco de dados
async function getArvoreById(){
    try{
        const [linhas] = await conexao.query(`
        select * from  \` tb_arvore\`
        `) 
        return linhas;
 } catch(erro){
        return erro;

    }
}
async function getArvoreById(id){
    try{
        const [linhas] = await conexao.query(`
        select * from  \` tb_arvore\` where id = ?
        `,[id]) 
        return linhas;
 } catch(erro){
        return erro;

    }
}

//insere um usuario no banco de dados
async function addArvore(defensivo,fertilizante,ultima_verificacao,tb_tipo_id,tb_situacao,tb_pomar_id){
    try{
        const [exec] = await conexao.query(`
            INSERT INTO \` tb_arvore\`(
                defensivo,
                fertilizante,
                ultima_vereficaçao,
                tb_tipo_id,
                tb_situacao_id,
                tb_pomar_id
            )VALUES(
                ?,?,?,?,?,?
            );
        `,[defensivo,fertilizante,ultima_verificacao,tb_tipo_id,tb_situacao,tb_pomar_id]) 
        return exec.affecteRows;
 } catch(erro){
        return erro;

    }
}


  async function buscaTodosArvore(){
    try{
        let [linhas] = await conexao.query(`
            select
            dt_arvore,
                u.defensivo,
                u.fertilizante,
                u.ultima_verificacao,
                u.tb_tipo_id,
                u.tb_situacao_id
                u. \` tb_arvore_id\`
            from  \` tb_arvore\` u;
        `)
        //retorna valores buscados do banco
        return linhas;

    }catch(e){
        //retorna o erro que aconteceu 
        return(e);
    }
}

module.exports = {
    getArvoreById,
    getArvoreById,
    addArvore,
    buscaTodosArvore
}