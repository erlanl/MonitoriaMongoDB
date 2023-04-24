db = db.getSiblingDB("monitoria");
//Dropando todas as collections
db.aulas.drop();
db.disciplinas.drop();
db.feedback.drop();
db.monitores.drop();
db.monitoria.drop();

//Povoamento collections Aulas
db.aulas.insertMany([
    {
        codigo: 1,
        disciplina: "IF669",
        monitores: [11122233344, 20220040],
        data: new Date('2022-03-03'),
        duracao_em_horas: 4,
        conteudo: "Estrutura de listas"
    },

    {
        codigo: 2,
        disciplina: "IF669",
        monitores: [11122233344],
        data: new Date('2022-01-10'),
        duracao_em_horas: 2,
        conteudo: "Comandos condicionais"
    },

    {
        codigo: 3,
        disciplina: "IF669",
        monitores: [20220040],
        data: new Date('2022-07-22'),
        duracao_em_horas: 2,
        conteudo: "Funções"
    },
    
    {
        codigo: 4,
        disciplina: "IF668",
        monitores: [20220030],
        data: new Date('2022-04-21'),
        duracao_em_horas: 2,
        conteudo: "HTML e CSS"
    },

    {
        codigo: 5,
        disciplina: "IF668",
        monitores: [20220030],
        data: new Date('2022-08-13'),
        duracao_em_horas: 2,
        conteudo: "Latex"
    },

    {    
        codigo: 6,
        disciplina: "MA531",    
        monitores: [22233344455],
        data: new Date('2022-02-01'),
        duracao_em_horas: 3,
        conteudo: "Espaços vetoriais"
    },

    {    
        codigo: 7,
        disciplina: "MA531",    
        monitores: [22233344455],
        data: new Date('2022-03-05'),
        duracao_em_horas: 2,
        conteudo: "Bases"
    },

    {    
        codigo: 8,
        disciplina: "MA531",    
        monitores: [22233344455],
        data: new Date('2022-04-02'),
        duracao_em_horas: 3,
        conteudo: "Matriz de mudança de base"
    },

    {    
        codigo: 9,
        disciplina: "MA531",    
        monitores: [22233344455],
        data: new Date('2022-08-30'),
        duracao_em_horas: 3,
        conteudo: "Autovetores e autovalores"
    },

    {
        codigo: 10,
        disciplina: "IF685",
        monitores: [93322442122, 92200011122],
        data: new Date('2023-08-02'),
        duracao_em_horas: 24,
        conteudo: "Introdução a OR"
    },

    {
        codigo: 11,
        disciplina: "IF672",
        monitores: [55566677788, 20220060, 44455566677],
        data: new Date('2022-04-18'),
        duracao_em_horas: 3,
        conteudo: "Árvore AVL"
    },

    {
        codigo: 12,
        disciplina: "IF674",
        monitores: [16171819202],
        data: new Date('2022-02-20'),
        duracao_em_horas: 2,
        conteudo: "Arquitetura de Computadores"
    },

    {
        codigo: 13,
        disciplina: "IF677",
        monitores: [17181920212],
        data: new Date('2022-03-25'),
        duracao_em_horas: 3,
        conteudo: "Metodologias Ageis"
    },

    {
        codigo: 14,
        disciplina: "IF677",
        monitores: [17181920212],
        data: new Date('2022-05-15'),
        duracao_em_horas: 2,
        conteudo: "Gerencia de testes"
    },

    {
        codigo: 15,
        disciplina: "IF670",
        monitores: [33344455566, 20220050],
        data: new Date('2022-05-05'),
        duracao_em_horas: 2,
        conteudo: "Indução matemática"
    },

    {
        codigo: 16,
        disciplina: "IF670",
        monitores: [33344455566],
        data: new Date('2022-05-12'),
        duracao_em_horas: 4,
        conteudo: "Teoria dos Grafos"
    },

    {
        codigo: 17,
        disciplina: "IF670",
        monitores: [20220050],
        data: new Date('2022-07-19'),
        duracao_em_horas: 2,
        conteudo: "Conjuntos"
    },

    {
        codigo: 18,
        disciplina: "FI582",
        monitores: [13141516171],
        data: new Date('2022-08-05'),
        duracao_em_horas: 2,
        conteudo: "Cinemática"
    },

    {
        codigo: 19,
        disciplina: "FI582",
        monitores: [13141516171],
        data: new Date('2022-05-19'),
        duracao_em_horas: 2,
        conteudo: "Dinâmica"
    },

    {
        codigo: 20,
        disciplina: "IF673",
        monitores: [14151617181],
        data: new Date('2022-08-12'),
        duracao_em_horas: 4,
        conteudo: "Teoria dos conjuntos"
    },

    {
        codigo: 21,
        disciplina: "IF675",
        monitores: [66677788899],
        data: new Date('2022-05-05'),
        duracao_em_horas: 2,
        conteudo: "Algoritmo de Clustering"
    },

    {
        codigo: 22,
        disciplina: "IF675",
        monitores: [66677788899],
        data: new Date('2022-05-19'),
        duracao_em_horas: 2,
        conteudo: "Redes neurais"
    },

    {
        codigo: 23,
        disciplina: "IF678",
        monitores: [15161718191],
        data: new Date('2022-05-12'),
        duracao_em_horas: 4,
        conteudo: "Protocolos de Rede"
    },

    {
        codigo: 24,
        disciplina: "IF682",
        monitores: [88899900011],
        data: new Date('2022-05-05'),
        duracao_em_horas: 2,
        conteudo: "Metodologia Ágil"
    },

    {
        codigo: 25,
        disciplina: "IF682",
        monitores: [88899900011],
        data: new Date('2022-10-12'),
        duracao_em_horas: 4,
        conteudo: "Gerenciamento de Projetos"
    },

    {
        codigo: 26,
        disciplina: "IF682",
        monitores: [88899900011],
        data: new Date('2022-11-19'),
        duracao_em_horas: 2,
        conteudo: "Engenharia de Requisitos"
    },

    {     
        codigo: 27,   
        disciplina: "IF689",        
        monitores: [10111213141],
        data: new Date('2022-05-03'),
        duracao_em_horas: 2,
        conteudo: "Autômatos"
    },

    {
        codigo: 28,
        disciplina: "IF689",
        monitores: [10111213141],
        data: new Date('2022-03-10'),
        duracao_em_horas: 4,
        conteudo: "Linguagens Regulares"
    },

    {     
        codigo: 29,   
        disciplina: "IF689",        
        monitores: [10111213141],
        data: new Date('2022-10-01'),
        duracao_em_horas: 2,
        conteudo: "Autômatos"
    },

    {
        codigo: 30,
        disciplina: "IF689",
        monitores: [10111213141],
        data: new Date('2022-10-10'),
        duracao_em_horas: 4,
        conteudo: "Linguagens Regulares"
    },

    {
        codigo: 31,
        disciplina: "IF689",
        monitores: [20220020],
        data: new Date('2022-05-05'),
        duracao_em_horas: 4,
        conteudo: "Integral"
    },

    {
        codigo: 32,
        disciplina: "IF689",
        monitores: [20220020],
        data: new Date('2022-10-10'),
        duracao_em_horas: 4,
        conteudo: "Integral"
    },

    {
        codigo: 33,
        disciplina: "ET586",
        monitores: [20220070],
        data: new Date('2022-10-10'),
        duracao_em_horas: 4,
        conteudo: "R"
    },

    {
        codigo: 34,
        disciplina: "IF679",
        monitores: [77788899900],
        data: new Date('2022-05-10'),
        duracao_em_horas: 2,
        conteudo: "Tira dúvidas"
    },

    {
        codigo: 35,
        disciplina: "IF679",
        monitores: [77788899900],
        data: new Date('2022-10-10'),
        duracao_em_horas: 2,
        conteudo: "Tira dúvidas"
    },

    {
        codigo: 36,
        disciplina: "IF681",
        monitores: [11111222233],
        data: new Date('2022-03-10'),
        duracao_em_horas: 2,
        conteudo: "Tira dúvidas"
    },

    {
        codigo: 37,
        disciplina: "IF681",
        monitores: [11111222233],
        data: new Date('2022-04-10'),
        duracao_em_horas: 2,
        conteudo: "Tira dúvidas"
    },

    {
        codigo: 38,
        disciplina: "IF681",
        monitores: [11111222233],
        data: new Date('2022-05-10'),
        duracao_em_horas: 2,
        conteudo: "Tira dúvidas"
    },

    {
        codigo: 39,
        disciplina: "IF681",
        monitores: [11111222233],
        data: new Date('2022-08-10'),
        duracao_em_horas: 2,
        conteudo: "Tira dúvidas"
    },

    {
        codigo: 40,
        disciplina: "IF681",
        monitores: [11111222233],
        data: new Date('2022-09-10'),
        duracao_em_horas: 2,
        conteudo: "Tira dúvidas"
    },

    {
        codigo: 41,
        disciplina: "IF680",
        monitores: [12121212121],
        data: new Date('2022-03-10'),
        duracao_em_horas: 2,
        conteudo: "Ray Tracing"
    },

    {
        codigo: 42,
        disciplina: "IF680",
        monitores: [12121212121],
        data: new Date('2022-04-10'),
        duracao_em_horas: 2,
        conteudo: "Curvas de Bezier"
    },

    {
        codigo: 43,
        disciplina: "IF680",
        monitores: [12121212121],
        data: new Date('2022-09-10'),
        duracao_em_horas: 2,
        conteudo: "Ray Tracing"
    },

    {
        codigo: 44,
        disciplina: "IF680",
        monitores: [12121212121],
        data: new Date('2022-10-10'),
        duracao_em_horas: 2,
        conteudo: "Curvas de Bezier"
    },

]);

//Povoamento Disciplinas
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

//Povoamento FeedBack
db.feedback.insertMany([
    {
      matricula: 11122233344,
      disciplina: "IF669",
      periodo: "2022.1",
      feedback: "Foi um semestre intenso, mas aprendi muito com os desafios da monitoria. Me esforcei para auxiliar os alunos da melhor maneira possível e fico feliz com os resultados alcançados."
    },
    
    {
      matricula: 22233344455,
      disciplina: "MA531",
      periodo: "2022.1",
      feedback: "Tive um semestre bastante produtivo como monitor, consegui ajudar muitos alunos a entenderem a disciplina e a terem um melhor desempenho. Aprendi muito com os professores e com os colegas de trabalho."
    },

    {
      matricula: 33344455566,
      disciplina: "IF670",
      periodo: "2022.1",
      feedback: "Foi uma experiência muito enriquecedora ser monitora nesse semestre. Tive a oportunidade de colocar em prática meus conhecimentos e ajudar os alunos a entenderem os conteúdos. Com certeza contribuí para a formação de muitos futuros profissionais da área."
    },

    {
      matricula: 44455566677,
      disciplina: "IF672",
      periodo: "2022.1",
      feedback: "Me dediquei muito durante esse semestre como monitora, tanto nas aulas quanto nas atividades extras. Foi gratificante ver o progresso dos alunos e saber que pude ajudá-los a terem um melhor desempenho na disciplina."
    },

    {
      matricula: 55566677788,
      disciplina: "IF672",
      periodo: "2022.1",
      feedback: "Foi uma honra ser monitor nesse semestre. Aprendi muito com os alunos e com os outros monitores, além de ter tido a oportunidade de me aprofundar nos conteúdos da disciplina. Espero ter contribuído para o sucesso dos alunos na disciplina."
    },

    {
      matricula: 66677788899,
      disciplina: "IF675",
      periodo: "2022.1",
      feedback: "Foi um semestre desafiador como monitora, mas pude aprender muito e evoluir bastante ao longo do período. Agradeço aos colegas de trabalho e aos professores por todo o apoio e suporte oferecidos."
    },
    {
      matricula: 77788899900,
      disciplina: "IF679",
      periodo: "2022.1",
      feedback: "Ser monitor foi uma experiência incrível nesse semestre. Tive a oportunidade de ajudar os alunos e de me aprofundar ainda mais nos conteúdos da disciplina. Agradeço aos colegas de trabalho e aos professores pela parceria e pelo aprendizado mútuo."
    },

    {
      matricula: 88899900011,
      disciplina: "IF682",
      periodo: "2022.1",
      feedback: "Foi um semestre intenso como monitora, mas consegui cumprir todas as minhas obrigações e ajudar os alunos da melhor maneira possível. Agradeço aos professores e aos colegas de trabalho pela parceria."
    },

    {
        matricula: 99900011122,
        disciplina: "IF685",
        periodo: "2022.1",
        feedback: "Foi um semestre muito produtivo! Tive a oportunidade de trabalhar com alunos muito dedicados e ver como a monitoria pode fazer a diferença em suas vidas acadêmicas."
    },
    {
        matricula: 92200011122,
        disciplina: "IF685",
        periodo: "2022.1",
        feedback: "Tive um período bastante intenso e produtivo como monitora. Consegui aplicar meu conhecimento na disciplina e auxiliar os alunos a superarem suas dificuldades. Fico grata pela oportunidade de ter feito parte desse processo de aprendizagem."
    },

    {
        matricula: 93322442122,
        disciplina: "IF685",
        periodo: "2022.1",
        feedback: "Foi um período de muitos desafios, mas também de muito aprendizado e crescimento como monitora. Agradeço aos alunos pela confiança e por terem me permitido fazer parte desse processo de aprendizagem conjunto."
    },

    {
        matricula: 10111213141,
        disciplina: "IF689",
        periodo: "2022.1",
        feedback: "Foi um período muito produtivo como monitora. Consegui ajudar os alunos a superarem suas dificuldades na disciplina e aprendi muito com eles também. Fico feliz em ter contribuído para o seu sucesso acadêmico."
    },

    {
        matricula: 11111222233,
        disciplina: "IF681",
        periodo: "2022.1",
        feedback: "Foi um período de muito aprendizado e crescimento como monitor. Consegui aplicar meu conhecimento na disciplina e auxiliar os alunos a superarem suas dificuldades. Fico feliz em ter contribuído para o sucesso acadêmico dos alunos."
    },

    {
        matricula: 12121212121,
        disciplina: "IF680",
        periodo: "2022.1",
        feedback: "Foi um período desafiador como monitora, mas também muito gratificante. Aprendi bastante sobre a disciplina e também sobre a arte de ensinar. Fico feliz em ter ajudado os alunos a se desenvolverem e a alcançarem seus objetivos."
    },
    
    {
        matricula_monitor: 20220020,
        disciplina: "MA026",
        periodo: "2022.1",
        feedback: "Minha experiência como monitor foi bastante enriquecedora. A disciplina é desafiadora e foi muito gratificante poder ajudar os alunos a entenderem os conteúdos e se saírem bem nas avaliações. Acredito que consegui passar de forma clara e didática os conceitos e exercícios da disciplina e isso contribuiu para o aprendizado dos alunos. Espero ter a oportunidade de ser monitor novamente em futuras edições da disciplina."
    },
    
    {
        matricula_monitor: 20220030,
        disciplina: "IF668",
        periodo: "2022.1",
        feedback: "Foi um período intenso mas também muito gratificante. A disciplina é bastante complexa e exigiu muito trabalho de minha parte para preparar as aulas e estar sempre atualizado com os conteúdos. Acredito que consegui cumprir bem meu papel como monitora e ajudar os alunos a entenderem melhor os conceitos e se saírem bem nas avaliações. Também aprendi muito com a experiência e espero poder aplicar esse conhecimento em futuras atividades como monitora."
    },

    {
        matricula_monitor: 20220040,
        disciplina: "IF669",
        periodo: "2022.1",
        feedback: "Foi um período bastante desafiador, mas também muito enriquecedor. A disciplina é de extrema importância para o curso e foi gratificante poder ajudar os alunos a entenderem melhor os conceitos e se saírem bem nas avaliações. Acredito que consegui passar de forma clara e didática os conteúdos da disciplina e contribuir para o aprendizado dos alunos. A experiência como monitor me permitiu desenvolver habilidades interpessoais e didáticas que serão úteis em minha futura carreira."
    },

    {
        matricula_monitor: 20220050,
        disciplina: "IF670",
        periodo: "2022.1",
        feedback: "Minha experiência como monitor foi bastante positiva. A disciplina é bastante prática e pude ajudar os alunos a desenvolverem habilidades importantes para o mercado de trabalho. Foi gratificante ver o progresso dos alunos ao longo do período e saber que pude contribuir para seu aprendizado. Também aprendi muito com a experiência e espero poder aplicar esse conhecimento em futuras atividades como monitor."
    },

    {
        matricula_monitor: 20220060,
        disciplina: "IF672",
        periodo: "2022.1",
        feedback: "Ser monitora de Algoritmos foi uma experiência muito enriquecedora. A disciplina é bastante complexa e exigiu muito trabalho da minha parte, mas valeu a pena."
    },

    {
        matricula_monitor: 20220070,
        disciplina: "ET586",
        periodo: "2022.1",
        feedback: "Foi uma ótima experiência como chefe de monitoria. Conseguimos organizar bem as atividades e a equipe de monitores atuou de forma muito colaborativa. Acredito que os alunos foram bem atendidos e tiveram um bom suporte durante o semestre."
    },

    {
        matricula_monitor: 14151617181,
        disciplina: "IF673",
        periodo: "2022.1",
        feedback: "Foi um período de muitos desafios na monitoria. Tivemos algumas dificuldades com a dinâmica de atendimento online, mas a equipe conseguiu se adaptar bem e dar um bom suporte aos alunos. Sinto que aprendi bastante e contribuí para o sucesso dos estudantes na disciplina."
    },

    {
        matricula_monitor: 16171819202,
        disciplina: "IF674",
        periodo: "2022.1",
        feedback: "Foi um semestre muito produtivo na monitoria. A equipe de monitores atuou de forma muito colaborativa e conseguimos dar um bom suporte aos alunos, tanto nas aulas quanto nos fóruns de discussão. Sinto que evoluí bastante na minha formação acadêmica e contribuí para a aprendizagem dos estudantes."
    },

    {
        matricula_monitor: 18192021222,
        disciplina: "LE530",
        periodo: "2022.1",
        feedback: "Foi uma experiência muito enriquecedora ser chefe de monitoria na disciplina. Conseguimos organizar bem as atividades e a equipe de monitores atuou com muita dedicação e profissionalismo. Acredito que contribuímos para o aprendizado dos alunos e para o sucesso da disciplina no semestre."
    },

    {
        matricula_monitor: 13141516171,
        disciplina: "FI582",
        periodo: "2022.1",
        feedback: "Foi um período curto, mas muito proveitoso na monitoria. Mesmo com pouco tempo, consegui aprender bastante sobre a disciplina e contribuir para a resolução das dúvidas dos alunos. Acredito que a equipe de monitores conseguiu dar um bom suporte aos estudantes no período."
    },

    {
        matricula_monitor: 15161718191,
        disciplina: "IF678",
        periodo: "2022.1",
        feedback: "Foi uma experiência muito desafiadora ser voluntário na monitoria no período. Tivemos muitas demandas e poucos recursos, mas a equipe de monitores conseguiu se organizar e dar um bom suporte aos alunos. Acredito que contribuí para a aprendizagem dos estudantes e evoluí bastante na minha formação acadêmica."
    },

    {
        matricula_monitor: 17181920212,
        disciplina: "IF677",
        periodo: "2022.1",
        feedback: "Foi um período intenso e desafiador. Tive que me dedicar bastante para acompanhar os alunos e garantir que eles estivessem compreendendo bem os conceitos. Felizmente, minha dedicação valeu a pena e muitos alunos conseguiram alcançar seus objetivos. Também consegui aprender muito durante esse período e adquirir novos conhecimentos na área. Estou ansioso para continuar aprendendo e ajudando os alunos no próximo semestre."
    },

    {
        matricula_monitor: 20220010,
        disciplina: "MA531",
        periodo: "2022.1",
        feedback: "Foi um período desafiador como monitor da disciplina, mas consegui superar as expectativas e aprender muito ao ajudar os alunos com as dificuldades encontradas. Foi gratificante ver a evolução dos alunos ao longo do período e sinto que contribuí de forma positiva para o sucesso deles na disciplina."
    }
]);

//Povoamento Monitores
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
        nome: "Raissa Heimann",
        email: "rh@cin.ufpe.br",
        matricula: 92200011122,
        disciplina: "IF685",
        tipo: "Chefe",
        conta_bancaria: {
            numero_conta: 3344422263,
            agencia: 3341,
            banco: "Banco do Brasil"
        }
    }, 

    {
        nome: "Isabela Marinho",
        email: "imr@cin.ufpe.br",
        matricula: 93322442122,
        disciplina: "IF685",
        tipo: "Chefe",
        conta_bancaria: {
            numero_conta: 2244446577,
            agencia: 3221,
            banco: "Banco do Brasil"
        }
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

//Povoamento Monitoria
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