const sqlite3 = require('sqlite3').verbose();

// Cria um novo banco de dados na pasta "db" com o nome "registros.db"
const db = new sqlite3.Database('./db/registros.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Conectado ao banco de dados Registros');
});

// Cria a tabela "registros" no banco de dados
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS registros (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            data TEXT NOT NULL,
            rota TEXT NOT NULL,
            recusados INTEGER,
            quebrados INTEGER,
            danificados INTEGER,
            vencidos INTEGER
          )`);
});

// Insere um novo registro no banco de dados
exports.inserirRegistro = (data, rota, recusados, quebrados, danificados, vencidos) => {
  db.run(`INSERT INTO registros (data, rota, recusados, quebrados, danificados, vencidos) VALUES (?, ?, ?, ?, ?, ?)`, 
          [data, rota, recusados, quebrados, danificados, vencidos], (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Novo registro adicionado ao banco de dados');
  });
};

// Retorna todos os registros do banco de dados
exports.getRegistros = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM registros`, (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
};
