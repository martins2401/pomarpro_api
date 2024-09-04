

const conexao = require('../database/connection.database');
//busca todos os usuarios do banco de dados
async function getPomarByID(){
    try{
        const [linhas] = await conexao.query(`
        select * from tb_pomar
        `) 
        return linhas;
 } catch(erro){
        return erro;

    }
}
async function getPomarByID(id){
    try{
        const [linhas] = await conexao.query(`
        select * from tb_pomar where id = ?
        `,[id]) 
        return linhas;
 } catch(erro){
        return erro;

    }
}

//insere um usuario no banco de dados
async function addPomar(apelido,linha,coluna){
    try{
        const [exec] = await conexao.query(`
        insert into tb_pomar(
        apelido,num_linha,num_coluna)values(
        ?,?,?)
        `,[apelido,linha,coluna]) 
        return exec.affecteRows;
 } catch(erro){
        return erro;

    }
}


  async function buscaTodosPomar(){
    try{
        let [linhas] = await conexao.query(`
            select
            u.id,
            u.apelido,
            u.num_linha,
            u.num_coluna
            from tb_pomar u;
        `)
        //retorna valores buscados do banco
        return linhas;

    }catch(e){
        //retorna o erro que aconteceu 
        return(e);
    }
}

module.exports = {
    getPomarByID,
    getPomarByID,
    addPomar,
    buscaTodosPomar
}