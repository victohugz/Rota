const sqlite3 = require('sqlite3').verbose();

// Abre a conexão com o banco de dados
let db = new sqlite3.Database('registros.db');

// Cria a tabela "entregas"
db.run(`CREATE TABLE entregas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        data TEXT NOT NULL,
        rota TEXT NOT NULL,
        recusados INTEGER DEFAULT 0,
        quebrados INTEGER DEFAULT 0,
        danificados INTEGER DEFAULT 0,
        vencidos INTEGER DEFAULT 0
    )`);

// Fecha a conexão com o banco de dados
db.close();
