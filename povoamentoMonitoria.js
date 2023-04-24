db = db.getSiblingDB("monitoria");
db.monitoria.drop();
db.monitoria.insertMany([
    {
        disciplina: "IF669",
        monitores: [11122233344, 20220040],
        periodo: "2022.1",
        aulas: [1,2]
    },

    {
        disciplina: "IF669",
        monitores: [11122233344],
        periodo: "2022.2",
        aulas: [3]
    },

    {
        disciplina: "IF668",
        monitores: [20220030],
        periodo: "2022.1",
        aulas: [4]
    },

    {
        disciplina: "IF668",
        monitores: [20220030],
        periodo: "2022.2",
        aulas: [5]
    },

    {
        disciplina: "MA531",    
        monitores: [22233344455],
        periodo: "2022.1",
        aulas: [6, 7, 8]
    },

    {
        disciplina: "MA531",    
        monitores: [22233344455],
        periodo: "2022.2",
        aulas: [9]
    },

    {
        disciplina: "IF685",
        monitores: [93322442122, 92200011122],
        periodo: "2022.1",
        aulas: []
    },

    {
        disciplina: "IF685",
        monitores: [93322442122, 92200011122],
        periodo: "2022.2",
        aulas: [10]
    },

    {
        disciplina: "IF672",
        monitores: [55566677788, 20220060, 44455566677],
        periodo: "2022.1",
        aulas: [11]
    },

    {
        disciplina: "IF672",
        monitores: [55566677788, 20220060],
        periodo: "2022.2",
        aulas: []
    },

    {
        disciplina: "IF674",
        monitores: [16171819202],
        periodo: "2022.1",
        aulas: [12]
    },

    {
        disciplina: "IF674",
        monitores: [],
        periodo: "2022.2",
        aulas: []
    },

    {
        disciplina: "IF677",
        monitores: [17181920212],
        periodo: "2022.1",
        aulas: [13, 14]
    },

    {
        disciplina: "IF677",
        monitores: [17181920212],
        periodo: "2022.2",
        aulas: []
    },

    {
        disciplina: "IF670",
        monitores: [33344455566, 20220050],
        periodo: "2022.1",
        aulas: [15]
    },

    {
        disciplina: "IF670",
        monitores: [33344455566],
        periodo: "2022.2",
        aulas: [16,17]
    },

    {
        disciplina: "FI582",
        monitores: [13141516171],
        periodo: "2022.1",
        aulas: [19]
    },

    {
        disciplina: "FI582",
        monitores: [13141516171],
        periodo: "2022.2",
        aulas: [18]
    },

    {
        disciplina: "IF673",
        monitores: [],
        periodo: "2022.1",
        aulas: []
    },

    {
        disciplina: "IF673",
        monitores: [14151617181],
        periodo: "2022.1",
        aulas: [20]
    },

    {
        disciplina: "IF675",
        monitores: [66677788899],
        periodo: "2022.1",
        aulas: [21, 22]
    },

    {
        disciplina: "IF675",
        monitores: [66677788899],
        periodo: "2022.2",
        aulas: []
    },

    {
        disciplina: "IF678",
        monitores: [15161718191],
        periodo: "2021.1",
        aulas: [23]
    },

    {
        disciplina: "IF678",
        monitores: [15161718191],
        periodo: "2021.2",
        aulas: []
    },

    {
        disciplina: "IF682",
        monitores: [88899900011],
        periodo: "2022.1",
        aulas: [24]
    },

    {
        disciplina: "IF682",
        monitores: [88899900011],
        periodo: "2022.1",
        aulas: [25, 26]
    },

    {
        disciplina: "IF689",        
        monitores: [10111213141],
        periodo: "2022.1",
        aulas: [27, 28]
    },

    {
        disciplina: "IF689",
        monitores: [10111213141],
        periodo: "2022.2",
        aulas: [29, 40]
    },

    {
        disciplina: "MA026",
        monitores: [20220020],
        periodo: "2022.1",
        aulas: [31]
    },

    {
        disciplina: "MA026",
        monitores: [20220020],
        periodo: "2022.2",
        aulas: [32]
    },

    {
        disciplina: "ET586",
        monitores: [],
        periodo: "2022.1",
        aulas: []
    },

    {
        disciplina: "ET586",
        monitores: [20220070],
        periodo: "2022.2",
        aulas: [33]
    },

    {
        disciplina: "IF679",
        monitores: [20220070],
        periodo: "2022.1",
        aulas: [34]
    },

    {
        disciplina: "IF679",
        monitores: [20220070],
        periodo: "2022.2",
        aulas: [35]
    },

    {
        disciplina: "LE530",
        monitores: [18192021222],
        periodo: "2022.1",
        aulas: []
    },

    {
        disciplina: "LE530",
        monitores: [18192021222],
        periodo: "2022.2",
        aulas: []
    },

    {
        disciplina: "IF681",
        monitores: [11111222233],
        periodo: "2022.1",
        aulas: [36, 37, 38]
    },

    {
        disciplina: "IF681",
        monitores: [11111222233],
        periodo: "2022.2",
        aulas: [39, 40]
    },

    {
        disciplina: "IF680",
        monitores: [12121212121],
        periodo: "2022.1",
        aulas: [41, 42]
    },

    {
        disciplina: "IF680",
        monitores: [12121212121],
        periodo: "2022.2",
        aulas: [43, 44]
    }
    
]);