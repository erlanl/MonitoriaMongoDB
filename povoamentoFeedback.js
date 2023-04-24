db = db.getSiblingDB("monitoria");
db.feedback.drop();
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
