

const conexao = require('../database/connection.database');
//busca todos os usuarios do banco de dados
async function getMovimentoByID() {
    try {
        const [linhas] = await conexao.query(`
        select * from tb_movi_tem
        `)
        return linhas;
    } catch (erro) {
        return erro;

    }
}
async function getMovimentoByID(id) {
    try {
        const [linhas] = await conexao.query(`
        select * from tb_movi_tem where id = ?
        `, [id])
        return linhas;
    } catch (erro) {
        return erro;

    }
}

//insere um usuario no banco de dados
async function addMovimento(tipo, quantidade, produto) {
    try {
        const [exec] = await conexao.query(`
           insert into tb_movimentacao(
            tb_tipo_id,
            dt_movimentaçao
           ) values(
            ?,
            current_timestamp 
           )
            `, [tipo])
        const [linha] = await conexao.query(`
                select last_insert_id() as id;
                `)
        const [exec2] = await conexao.query(`
        insert into tb_movi_tem(
        quantidade,tb _produtos_id,tb_movimentacao_id)
        values(?,?,?)
        `, [quantidade, produto, linha[0].id])
        return exec2.affecteRows;
    } catch (erro) {
        return erro;

    }
}


async function buscaTodosMovimento() {
    try {
        let [linhas] = await conexao.query(`
            select
            u.quantidade,
            u.tb_produtos_id,
            u.tb_movimentacao_id
            from tb_movi_tem u;
        `)
        //retorna valores buscados do banco
        return linhas;

    } catch (e) {
        //retorna o erro que aconteceu 
        return (e);
    }
}

module.exports = {
    getMovimentoByID,
    getMovimentoByID,
    addMovimento,
    buscaTodosMovimento
}