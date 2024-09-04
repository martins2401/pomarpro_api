

const conexao = require('../database/connection.database');
//busca todos os usuarios do banco de dados
async function getMaterialById(){
    try{
        const [linhas] = await conexao.query(`
        select * from tb_material
        `) 
        return linhas;
 } catch(erro){
        return erro;

    }
}
async function getMaterialById(id){
    try{
        const [linhas] = await conexao.query(`
        select * from tb_material where id = ?
        `,[id]) 
        return linhas;
 } catch(erro){
        return erro;

    }
}

//insere um usuario no banco de dados
async function addMaterial(nome,valor,tipo,fornecedor){
    try{
        const [exec] = await conexao.query(`
        insert into tb_materiais(
        nome,valor,tb_tipo_id,fornecedor)values(
        ?,?,?,?)
        `,[nome,valor,tipo,fornecedor]) 
        return exec.affecteRows;
 } catch(erro){
        return erro;

    }
}


  async function buscaTodosMateriais(){
    try{
        let [linhas] = await conexao.query(`
            select
            u.id,
            u.nome,
            u.valor,
            u.tb_tipo_id,
            u.fornecedor
            from tb_materiais u;
        `)
        //retorna valores buscados do banco
        return linhas;

    }catch(e){
        //retorna o erro que aconteceu 
        return(e);
    }
}

module.exports = {
    getMaterialById,
    getMaterialById,
    addMaterial,
    buscaTodosMateriais
}