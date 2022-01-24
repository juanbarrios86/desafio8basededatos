const {knex, knexMysql} = require('./knex');

(async ()=>{

    try{
        await knex.schema.dropTableIfExists('mensajes')
        await knexMysql.schema.dropTableIfExists('productos')
        console.log('Se han borrado las tablas')
    }catch(err){
        console.log(err)
    }finally{
        knex.destroy();
        knexMysql.destroy()
    }

})()

// exporto el objeto para usarlo en otros modulos
module.exports = { knex, knexMysql };

