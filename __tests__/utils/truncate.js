import database from '../../src/database';

export default function truncate() {
  return Promise.all(
    // pega todos os models
    Object.keys(database.connection.models).map(key => {
      return database.connection.models[key].destroy({
        // utilizar o comando truncate no lugar do SQL. FOrça toda a exclusão dos registros na tabela
        truncate: true,
        // serve caso tenha relacionamento bloequeando a remoção. FOrma a remoção
        force: true,
      });
    })
  );
}
