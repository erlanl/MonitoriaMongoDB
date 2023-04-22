db = db.getSiblingDB("monitoria");
db.monitoria.drop();
db.monitoria.insertMany([
    {
        disciplina: "IF669",
        monitores: [11122233344, 20220040],
        periodo: "2020.1",
        aulas: db.aulas.findOne({data: new Date('2022-03-03')}, {_id: true})
    },

    {
        disciplina: "IF669",
        monitores: [11122233344],
        periodo: "2022.1",
        aulas: db.aulas.findOne({data: new Date('2020-01-10')}, {_id: true})
    },

    {
        disciplina: "IF669",
        monitores: [20220040],
        periodo: "2022.2",
        aulas: db.aulas.findOne({data: new Date('2022-04-22')}, {_id: true})
    },

    {
        disciplina: "IF668",
        monitores: [20220030],
        periodo: "2021.2",
        aulas: db.aulas.findOne({data: new Date('2021-04-21')}, {_id: true})
    },

    {
        disciplina: "IF668",
        monitores: [20220030],
        periodo: "2021.1",
        aulas: db.aulas.findOne({data: new Date('2021-02-13')}, {_id: true})
    },

    {
        disciplina: "MA531",    
        monitores: [22233344455],
        periodo: "2022.1",
        aulas: db.aulas.findOne({data: new Date('2022-02-01')}, {_id: true})
    },

    {
        disciplina: "IF685",
        monitores: [93322442122, 92200011122],
        periodo: "2023.1",
        aulas: db.aulas.findOne({data: new Date('2023-03-02')}, {_id: true})
    },

    {
        disciplina: "IF672",
        monitores: [55566677788, 20220060, 44455566677],
        periodo: "2022.1",
        aulas: db.aulas.findOne({data: new Date('2022-04-18')}, {_id: true})
    },

    {
        disciplina: "IF674",
        monitores: [16171819202],
        periodo: "2022.1",
        aulas: db.aulas.findOne({data: new Date('2022-02-20')}, {_id: true})
    },

    {
        disciplina: "IF677",
        monitores: [17181920212],
        periodo: "2023.2",
        aulas: db.aulas.findOne({data: new Date('2023-03-25')}, {_id: true})
    },

    {
        disciplina: "IF677",
        monitores: [17181920212],
        periodo: "2023.2",
        aulas: db.aulas.findOne({data: new Date('2023-05-15')}, {_id: true})
    },

    {
        disciplina: "IF670",
        monitores: [33344455566, 20220050],
        periodo: "2022.2",
        aulas: db.aulas.findOne({data: new Date('2022-05-05')}, {_id: true})
    },

    {
        disciplina: "IF670",
        monitores: [33344455566],
        periodo: "2022.2",
        aulas: db.aulas.findOne({data: new Date('2022-05-12')}, {_id: true})
    },

    {
        disciplina: "IF670",
        monitores: [20220050],
        periodo: "2022.2",
        aulas: db.aulas.findOne({data: new Date('2022-05-19')}, {_id: true})
    },

    {
        disciplina: "FI582",
        monitores: [13141516171],
        periodo: "2022.1",
        aulas: db.aulas.findOne({data: new Date('2022-05-05')}, {_id: true})
    },

    {
        disciplina: "FI582",
        monitores: [13141516171],
        periodo: "2022.2",
        aulas: db.aulas.findOne({data: new Date('2022-05-19')}, {_id: true})
    },

    {
        disciplina: "IF673",
        monitores: [14151617181],
        periodo: "2022.2",
        aulas: db.aulas.findOne({data: new Date('2022-05-12')}, {_id: true})
    },

    {
        disciplina: "IF675",
        monitores: [66677788899],
        periodo: "2022.1",
        aulas: db.aulas.findOne({data: new Date('2022-05-05')}, {_id: true})
    },


    {
        disciplina: "IF675",
        monitores: [66677788899],
        periodo: "2022.1",
        aulas: db.aulas.findOne({data: new Date('2022-05-19')}, {_id: true})
    },

    {
        disciplina: "IF678",
        monitores: [15161718191],
        periodo: "2021.1",
        aulas: db.aulas.findOne({data: new Date('2022-05-12')}, {_id: true})
    },

    {
        disciplina: "IF682",
        monitores: [88899900011],
        periodo: "2022.1",
        aulas: db.aulas.findOne({data: new Date('2022-05-19')}, {_id: true})
    },

    {
        disciplina: "IF682",
        monitores: [88899900011],
        periodo: "2022.2",
        aulas: db.aulas.findOne({data: new Date('2022-05-12')}, {_id: true})
    },

    {
        disciplina: "IF682",
        monitores: [88899900011],
        periodo: "2022.2",
        aulas: db.aulas.findOne({data: new Date('2022-05-19')}, {_id: true})
    },

    {
        disciplina: "IF689",        
        monitores: [10111213141],
        periodo: "2022.1",
        aulas: db.aulas.findOne({data: new Date('2022-05-03')}, {_id: true})
    },

    {
        disciplina: "IF689",
        monitores: [10111213141],
        periodo: "2022.1",
        aulas: db.aulas.findOne({data: new Date('2022-03-10')}, {_id: true})
    },
]);