db = db.getSiblingDB("monitoria");
db.monitores.drop();
db.monitores.insertMany([
    {
        nome: "Erlan Lira",
        email: "elsj@cin.ufpe.br",
        matricula: 11122233344,
        disciplina: "IF669",
        tipo: "Voluntario"
    },

    {
        nome: "Olias Lira",
        email: "olsj@cin.ufpe.br",
        matricula: 22233344455,
        disciplina: "MA531",
        tipo: "Chefe",
        conta_bancaria: {
            numero_conta: 1122232322,
            agencia: 322,
            banco: "Banco do Brasil" 
        }
    },

    {
        nome: "Camila Carvalho",
        email: "ccg@cin.ufpe.br",
        matricula: 33344455566,
        disciplina: "IF670",
        tipo: "Voluntario"
    },

    {
        nome: "Rafaela Santos",
        email: "rss@cin.ufpe.br",
        matricula: 44455566677,
        disciplina: "IF672",
        tipo: "Chefe",
        conta_bancaria: {
            numero_conta: 5566778899,
            agencia: 1234,
            banco: "Itau"
        }
    }, 

    {
        nome: "Felipe Oliveira",
        email: "fop@cin.ufpe.br",
        matricula: 55566677788,
        disciplina: "IF672",
        tipo: "Voluntario"
    }, 

    {
        nome: "Livia Fernandes",
        email: "ljf@cin.ufpe.br",
        matricula: 66677788899,
        disciplina: "IF675",
        tipo: "Chefe",
        conta_bancaria: {
            numero_conta: 7788990011,
            agencia: 4321,
            banco: "Santander"
        }
    }, 

    {
        nome: "Gabriel Souza",
        email: "gfs@cin.ufpe.br",
        matricula: 77788899900,
        disciplina: "IF679",
        tipo: "Voluntario"
    }, 

    {
        nome: "Juliana Lima",
        email: "jls@cin.ufpe.br",
        matricula: 88899900011,
        disciplina: "IF682",
        tipo: "Chefe",
        conta_bancaria: {
            numero_conta: 2233445566,
            agencia: 5678,
            banco: "Caixa Economica Federal"
        }
    }, 

    {
        nome: "Matheus Costa",
        email: "mcs@cin.ufpe.br",
        matricula: 99900011122,
        disciplina: "IF685",
        tipo: "Voluntario"
    }, 

    {
        nome: "Carolina Oliveira",
        email: "cao@cin.ufpe.br",
        matricula: 10111213141,
        disciplina: "IF689",
        tipo: "Chefe",
        conta_bancaria: {
            numero_conta: 3344556677,
            agencia: 9101,
            banco: "Banco do Brasil"
        }
    }, 

    {
        nome: "Pedro Santos",
        email: "pds@cin.ufpe.br",
        matricula: 11111222233,
        disciplina: "IF681",
        tipo: "Voluntario"
    }, 

    {
        nome: "Ana Costa",
        email: "acc@cin.ufpe.br",
        matricula: 12121212121,
        disciplina: "IF680",
        tipo: "Chefe",
        conta_bancaria: {
            numero_conta: 9998887776,
            agencia: 5432,
            banco: "Itau"
        }
    }, 

    {
        nome: "Matheus Silva",
        email: "msilva@cin.ufpe.br",
        matricula: 20220010,
        disciplina: "MA531",
        tipo: "Chefe",
        conta_bancaria: {
            numero_conta: 1122232322,
            agencia: 322,
            banco: "Banco do Brasil"
        }
    }, 

    {
        nome: "Pedro Lima",
        email: "plima@cin.ufpe.br",
        matricula: 20220020,
        disciplina: "MA026",
        tipo: "Chefe",
        conta_bancaria: {
            numero_conta: 44567788,
            agencia: 500,
            banco: "Caixa Econômica Federal"
        }
    }, 

    {
        nome: "Giovana Oliveira",
        email: "goliveira@cin.ufpe.br",
        matricula: 20220030,
        disciplina: "IF668",
        tipo: "Chefe",
        conta_bancaria: {
            numero_conta: 33445566,
            agencia: 1500,
            banco: "Banco do Brasil"
        }
    }, 

    {
        nome: "Marcelo Santos",
        email: "msantos@cin.ufpe.br",
        matricula: 20220040,
        disciplina: "IF669",
        tipo: "Chefe",
        conta_bancaria: {
            numero_conta: 99887766,
            agencia: 200,
            banco: "Banco do Brasil"
        }
    }, 

    {
        nome: "Luana Souza",
        email: "lsouza@cin.ufpe.br",
        matricula: 20220050,
        disciplina: "IF670",
        tipo: "Chefe",
        conta_bancaria: {
            numero_conta: 44552233,
            agencia: 700,
            banco: "Banco do Brasil"
        }
    }, 

    {
        nome: "Fernanda Almeida",
        email: "falmeida@cin.ufpe.br",
        matricula: 20220060,
        disciplina: "IF672",
        tipo: "Chefe",
        conta_bancaria: {
            numero_conta: 11223344,
            agencia: 100,
            banco: "Banco do Brasil"
        }
    }, 

    {
        nome: "João Carvalho",
        email: "jcarvalho@cin.ufpe.br",
        matricula: 20220070,
        disciplina: "ET586",
        tipo: "Chefe",
        conta_bancaria: {
            numero_conta: 22334455,
            agencia: 900,
            banco: "Banco do Brasil"
        }
    }, 

    {
        nome: "Thiago Costa",
        email: "tcc@cin.ufpe.br",
        matricula: 13141516171,
        disciplina: "FI582",
        tipo: "Voluntario"
    }, 

    {
        nome: "Bruno Silva",
        email: "bss@cin.ufpe.br",
        matricula: 14151617181,
        disciplina: "IF673",
        tipo: "Chefe",
        conta_bancaria: {
            numero_conta: 3322110055,
            agencia: 7654,
            banco: "Santander"
        }
    }, 

    {
        nome: "Lucas Souza",
        email: "lhs@cin.ufpe.br",
        matricula: 15161718191,
        disciplina: "IF678",
        tipo: "Voluntario"
    }, 

    {
        nome: "Felipe Mendonça",
        email: "fms@cin.ufpe.br",
        matricula: 16171819202,
        disciplina: "IF674",
        tipo: "Chefe",
        conta_bancaria: {
            numero_conta: 6677889900,
            agencia: 3210,
            banco: "Banco do Brasil"
        }
    }, 

    {
        nome: "Thais Castro",
        email: "tac@cin.ufpe.br",
        matricula: 17181920212,
        disciplina: "IF677",
        tipo: "Voluntario"
    }, 

    {
        nome: "Vitor Santos",
        email: "vts@cin.ufpe.br",
        matricula: 18192021222,
        disciplina: "LE530",
        tipo: "Chefe",
        conta_bancaria: {
            numero_conta: 2233445566,
            agencia: 1122,
            banco: "Caixa Economica Federal"
        }
    }
]);