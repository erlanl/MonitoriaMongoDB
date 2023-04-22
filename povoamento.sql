use monitoria

db.createCollection("disciplinas")
db.createCollection("professores")
db.createCollection("monitores")
db.createCollection("monitoria")
db.createCollection("feedback_monitores")
db.createCollection("aulas")

/* Povoamento das disciplinas */
db.disciplinas.insertOne({
    nome: "Álgebra Vetorial e Linear para Computação",
    codigo: "MA531",
    professores: [1],
    carga_horaria: 60,
});

db.disciplinas.insertOne({
    nome: "Cálculo Diferencial e Integral 1",
    codigo: "MA026",
    professores: [2],
    carga_horaria: 90,
});

db.disciplinas.insertOne({
    nome: "Introdução à Computação",
    codigo: "IF668",
    professores: [3],
    carga_horaria: 60,
});

db.disciplinas.insertOne({
    nome: "Introdução à Programação",
    codigo: "IF669",
    professores: [4, 5, 6],
    carga_horaria: 75,
});

db.disciplinas.insertOne({
    nome: "Matemática Discreta para Computação",
    codigo: "IF670",
    professores: [7],
    carga_horaria: 60,
});

db.disciplinas.insertOne({
    nome: "Algoritmos e Estruturas de Dados",
    codigo: "IF672",
    professores: [8, 9],
    carga_horaria: 90,
});

db.disciplinas.insertOne({
    nome: "Estatística e Probabilidade para Computação",
    codigo: "ET586",
    professores: [10],
    carga_horaria: 60,
});

db.disciplinas.insertOne({
    nome: "Física para Computação",
    codigo: "FI582",
    professores: [11],
    carga_horaria: 90,
});

db.disciplinas.insertOne({
    nome: "Lógica para Computação",
    codigo: "IF673",
    professores: [12, 7],
    carga_horaria: 60,
});

db.disciplinas.insertOne({
    nome: "Sistemas Digitais",
    codigo: "IF675",
    professores: [13],
    carga_horaria: 75,
});

db.disciplinas.insertOne({
    nome: "Informática e Sociedade",
    codigo: "IF679",
    professores: [14, 24],
    carga_horaria: 60,
});

db.disciplinas.insertOne({
    nome: "Infraestrutura de Comunicação",
    codigo: "IF678",
    professores: [15],
    carga_horaria: 60,
});

db.disciplinas.insertOne({
    nome: "Infraestrutura de Hardware",
    codigo: "IF674",
    professores: [16],
    carga_horaria: 75,
});

db.disciplinas.insertOne({
    nome: "Infraestrutura de Software",
    codigo: "IF677",
    professores: [17],
    carga_horaria: 75,
});

db.disciplinas.insertOne({
    nome: "Inglês para Computação",
    codigo: "LE530",
    professores: [18],
    carga_horaria: 60,
});

db.disciplinas.insertOne({
    nome: "Engenharia de Software e Sistemas",
    codigo: "IF682",
    professores: [19, 20],
    carga_horaria: 75,
});

db.disciplinas.insertOne({
    nome: "Gerenciamento de Dados e Informação",
    codigo: "IF685",
    professores: [21],
    carga_horaria: 60,
});

db.disciplinas.insertOne({
    nome: "Informática Teórica",
    codigo: "IF689",
    professores: [22, 8],
    carga_horaria: 75,
});

db.disciplinas.insertOne({
    nome: "Interfaces Usuário-Máquina",
    codigo: "IF681",
    professores: [23],
    carga_horaria: 60,
});

db.disciplinas.insertOne({
    nome: "Processamento Gráfico",
    codigo: "IF680",
    professores: [1],
    carga_horaria: 75,
});