db = db.getSiblingDB("monitoria");
db.disciplinas.drop();
db.disciplinas.insertMany([
    {
        nome: "Álgebra Vetorial e Linear para Computação",
        codigo: "MA531",
        professor: "Silvio de Barros",
        carga_horaria: 60
    },

    {
        nome: "Cálculo Diferencial e Integral 1",
        codigo: "MA026",
        professor: "Bruno Pelouro",
        carga_horaria: 90
    },

    {
        nome: "Introdução à Computação",
        codigo: "IF668",
        professor: "Adriano Lorena",
        carga_horaria: 60
    },

    {
        nome: "Introdução à Programação",
        codigo: "IF669",
        professor: "Sergio Soares",
        carga_horaria: 75
    },

    {
        nome: "Matemática Discreta para Computação",
        codigo: "IF670",
        professor: "Anjolina Grisi",
        carga_horaria: 60
    },

    {
        nome: "Algoritmos e Estruturas de Dados",
        codigo: "IF672",
        professor: "Paulo Fonseca",
        carga_horaria: 90
    },

    {
        nome: "Estatística e Probabilidade para Computação",
        codigo: "ET586",
        professor: "Renata Maria",
        carga_horaria: 60
    },

    {
        nome: "Física para Computação",
        codigo: "FI582",
        professor: "Azedeh Maria",
        carga_horaria: 90
    },

    {
        nome: "Lógica para Computação",
        codigo: "IF673",
        professor: "Anjolina Grisi",
        carga_horaria: 60
    },

    {
        nome: "Sistemas Digitais",
        codigo: "IF675",
        professor: "Adriano Lorena",
        carga_horaria: 75
    },

    {
        nome: "Informática e Sociedade",
        codigo: "IF679",
        professor: "Carina Frota",
        carga_horaria: 60
    },

    {
        nome: "Infraestrutura de Comunicação",
        codigo: "IF678",
        professor: "Paulo André",
        carga_horaria: 60
    },

    {
        nome: "Infraestrutura de Hardware",
        codigo: "IF674",
        professor: "Adriano Augusto",
        carga_horaria: 75
    },

    {
        nome: "Infraestrutura de Software",
        codigo: "IF677",
        professor: "Breno Miranda",
        carga_horaria: 75
    },

    {
        nome: "Inglês para Computação",
        codigo: "LE530",
        professor: "Rafael Bezerra",
        carga_horaria: 60
    },

    {
        nome: "Engenharia de Software e Sistemas",
        codigo: "IF682",
        professor: "Breno Miranda",
        carga_horaria: 75
    },

    {
        nome: "Gerenciamento de Dados e Informação",
        codigo: "IF685",
        professor: "Valeria Cesario",
        carga_horaria: 60
    },

    {
        nome: "Informática Teórica",
        codigo: "IF689",
        professor: "Paulo Fonseca",
        carga_horaria: 75
    },

    {
        nome: "Interfaces Usuário-Máquina",
        codigo: "IF681",
        professor: "Alex Sandro",
        carga_horaria: 60
    },

    {
        nome: "Processamento Gráfico",
        codigo: "IF680",
        professor: "Silvio de Barros",
        carga_horaria: 75
    }
]);