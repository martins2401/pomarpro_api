

const conexao = require('../database/connection.database');
//busca todos os usuarios do banco de dados
async function getColheitaById(){
    try{
        const [linhas] = await conexao.query(`
        select * from tb_colheita
        `) 
        return linhas;
 } catch(erro){
        return erro;

    }
}
async function getColheitaById(id){
    try{
        const [linhas] = await conexao.query(`
        select * from tb_colheita where id = ?
        `,[id]) 
        return linhas;
 } catch(erro){
        return erro;

    }
}

//insere um usuario no banco de dados
async function addColheita(quantidade,arvore){
    try{
        const [exec] = await conexao.query(`
            INSERT INTO tb_colheita(
                dt_colheita,
                quantidade,
                tb_arvore_id
            )VALUES(
                current_timestamp,
                ?,
                ?
            );
        `,[quantidade,arvore]) 
        return exec.affecteRows;
 } catch(erro){
        return erro;

    }
}


  async function buscaTodosColheita(){
    try{
        let [linhas] = await conexao.query(`
            select
            u.id,
            u.quantidade,
            u.arvore,
            from tb_colheita u;
        `)
        //retorna valores buscados do banco
        return linhas;

    }catch(e){
        //retorna o erro que aconteceu 
        return(e);
    }
}

module.exports = {
    getColheitaById,
    getColheitaById,
    addColheita,
   buscaTodosColheita
}