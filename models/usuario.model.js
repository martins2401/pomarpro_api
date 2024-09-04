

const conexao = require('../database/connection.database');
//busca todos os usuarios do banco de dados
async function buscaTodosUsuarios(){
    try{
        const [linhas] = await conexao.query(`
        select * from tb_usuario
        `) 
        return linhas;
 } catch(erro){
        return erro;

    }
}
async function getUsuariosById(id){
    try{
        const [linhas] = await conexao.query(`
        select * from tb_usuario where id = ?
        `,[id]) 
        return linhas;
 } catch(erro){
        return erro;

    }
}

//insere um usuario no banco de dados
async function addUsuariosByid(nome,valor,tipo,fornecedor){
    try{
        const [exec] = await conexao.query(`
        insert into tb_usuario(
        nome,valor,tipo,fornecedor)values(
        ?,?,?,?,?,?,?)
        `,[nome,valor,tipo,fornecedor]) 
        return exec.affecteRows;
 } catch(erro){
        return erro;

    }
}

async function autenticarUsuario(usuario,senha){
    try{
      let[linha]= await conexao.query(`
        select
        id
        from tb_usuario
        where 1=1
        and login = ?
        and senha = ?
        `,[usuario,senha])
        return linha;
    }catch(e){
      return e;
    }
  }

module.exports = {
    buscaTodosUsuarios ,
    addUsuariosByid,
    autenticarUsuario,
    getUsuariosById

}