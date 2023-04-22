db = db.getSiblingDB("monitoria");
db.aulas.drop();
db.aulas.insertMany([
    {
        disciplina: "IF669",
        monitores: [11122233344, 20220040],
        data: new Date('2022-03-03'),
        duracao_em_horas: 4,
        conteudo: "Estrutura de listas"
    },

    {
        disciplina: "IF669",
        monitores: [11122233344],
        data: new Date('2022-01-10'),
        duracao_em_horas: 2,
        conteudo: "Comandos condicionais"
    },

    {
        disciplina: "IF669",
        monitores: [20220040],
        data: new Date('2022-04-22'),
        duracao_em_horas: 2,
        conteudo: "Funções"
    },
    
    {
        disciplina: "IF668",
        monitores: [20220030],
        data: new Date('2021-04-21'),
        duracao_em_horas: 2,
        conteudo: "HTML e CSS"
    },

    {
        disciplina: "IF668",
        monitores: [20220030],
        data: new Date('2021-02-13'),
        duracao_em_horas: 2,
        conteudo: "Latex"
    },

    {    
        disciplina: "MA531",    
        monitores: [22233344455],
        data: new Date('2022-02-01'),
        duracao_em_horas: 3,
        conteudo: "Espaços vetoriais"
    },

    {
        disciplina: "IF685",
        monitores: [93322442122, 92200011122],
        data: new Date('2023-03-02'),
        duracao_em_horas: 24,
        conteudo: "Introdução a OR"
    },

    {
        disciplina: "IF672",
        monitores: [55566677788, 20220060, 44455566677],
        data: new Date('2022-04-18'),
        duracao_em_horas: 3,
        conteudo: "Árvore AVL"
    },

    {
        disciplina: "IF674",
        monitores: [16171819202],
        data: new Date('2022-02-20'),
        duracao_em_horas: 2,
        conteudo: "Arquitetura de Computadores"
    },

    {
        disciplina: "IF677",
        monitores: [17181920212],
        data: new Date('2023-03-25'),
        duracao_em_horas: 3,
        conteudo: "Metodologias Ageis"
    },

    {
        disciplina: "IF677",
        monitores: [17181920212],
        data: new Date('2023-05-15'),
        duracao_em_horas: 2,
        conteudo: "Gerencia de testes"
    },

    {
        disciplina: "IF670",
        monitores: [33344455566, 20220050],
        data: new Date('2022-05-05'),
        duracao_em_horas: 2,
        conteudo: "Indução matemática"
    },

    {
        disciplina: "IF670",
        monitores: [33344455566],
        data: new Date('2022-05-12'),
        duracao_em_horas: 4,
        conteudo: "Teoria dos Grafos"
    },

    {
        disciplina: "IF670",
        monitores: [20220050],
        data: new Date('2022-05-19'),
        duracao_em_horas: 2,
        conteudo: "Conjuntos"
    },

    {
        disciplina: "FI582",
        monitores: [13141516171],
        data: new Date('2022-05-05'),
        duracao_em_horas: 2,
        conteudo: "Cinemática"
    },

    {
        disciplina: "FI582",
        monitores: [13141516171],
        data: new Date('2022-05-19'),
        duracao_em_horas: 2,
        conteudo: "Dinâmica"
    },

    {
        disciplina: "IF673",
        monitores: [14151617181],
        data: new Date('2022-05-12'),
        duracao_em_horas: 4,
        conteudo: "Teoria dos conjuntos"
    },

    {
        disciplina: "IF675",
        monitores: [66677788899],
        data: new Date('2022-05-05'),
        duracao_em_horas: 2,
        conteudo: "Algoritmo de Clustering"
    },

    {
        disciplina: "IF675",
        monitores: [66677788899],
        data: new Date('2022-05-19'),
        duracao_em_horas: 2,
        conteudo: "Redes neurais"
    },

    {
        disciplina: "IF678",
        monitores: [15161718191],
        data: new Date('2022-05-12'),
        duracao_em_horas: 4,
        conteudo: "Protocolos de Rede"
    },

    {
        disciplina: "IF682",
        monitores: [88899900011],
        data: new Date('2022-05-05'),
        duracao_em_horas: 2,
        conteudo: "Metodologia Ágil"
    },

    {
        disciplina: "IF682",
        monitores: [88899900011],
        data: new Date('2022-05-12'),
        duracao_em_horas: 4,
        conteudo: "Gerenciamento de Projetos"
    },

    {
        disciplina: "IF682",
        monitores: [88899900011],
        data: new Date('2022-05-19'),
        duracao_em_horas: 2,
        conteudo: "Engenharia de Requisitos"
    },

    {        
        disciplina: "IF689",        
        monitores: [10111213141],
        data: new Date('2022-05-03'),
        duracao_em_horas: 2,
        conteudo: "Autômatos"
    },

    {
        disciplina: "IF689",
        monitores: [10111213141],
        data: new Date('2022-03-10'),
        duracao_em_horas: 4,
        conteudo: "Linguagens Regulares"
    }

]);