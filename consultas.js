use monitoria;

// Selecione o nome e código das disciplina das monitorias que possuem 2 ou mais monitores
// $size, $exists, $eq, $gte, $find
db.disciplinas.find({
    codigo: {$in:db.monitoria.distinct("disciplina", {
        monitores: { $exists: true, $ne: [] },
        $expr: { $gte: [ { $size: "$monitores" }, 2 ] }
    })}

}, {nome: true, codigo: true, _id: false})

// Calcula a média da duração das monitorias de cada disciplina de 2022.1
// aggregate, match, group, avg, sort
db.aulas.aggregate([
    { $match: {data: {$gt: new Date('2022-01-01'), $lt: new Date('2022-06-01')}}},
    { $group: {_id: "$disciplina", avgValue: {$avg: "$duracao_em_horas"}}},
    { $sort: {avgValue: -1}}
])

// Atualiza no banco de dados o professor que leciona a disciplina de introdução à computação
// Update, Pretty, Set
db.disciplinas.find({codigo: "IF668"}).pretty() // exibe os dados antes da alteração
db.disciplinas.updateOne({codigo: "IF668"}, {$set: {professor: "Filipe Calegario"}})
db.disciplinas.find({codigo: "IF668"}).pretty() // exibe os dados da disciplina de introdução à computação, mostrando que a alteração foi feita

// Atualiza no banco de dados o professor de Informática Teórica
db.disciplinas.find({codigo: "IF689"}).pretty()
db.disciplinas.updateOne({codigo: "IF689"}, {$set: {professor: "Ruy de Queiroz"}})
db.disciplinas.find({codigo: "IF689"}).pretty()

//Retorne o top 3 dos monitores com maiores feedbacks, retornem também a quantidade de caracteres do feedback, nome, email e matricula do monitor, assim como o código da discplina monitorada por ele.
//LIMIT, LOOKUP, PROJECT
db.feedback.aggregate([
    
  // O método project() é usado para selecionar campos de coleção de feedback
  // O operador $strLenCP é usado para obter o tamanho do campo "feedback" em caracteres
  {$project: {_id: 0, matricula_monitor: 1, disciplina: 1, email: 1, feedback_length: {$strLenCP: "$feedback"}}},
  
  // Ordena de acordo com o tamanho do feedback em ordem decrescente
  {$sort: {feedback_length: -1}},
  
  // O método lookup() é usado para combinar documentos da coleção de monitores com de feedback
  // O campo "matricula_monitor" em feedback é comparado com o campo "matricula" em monitores
  {$lookup: { 
    from: "monitores",
    localField: "matricula_monitor",
    foreignField: "matricula",
    as: "monitor_info"
  }},
  
  // O método unwind() é usado para desestruturar o array "monitor_info" em vários documentos
  {$unwind: "$monitor_info"},
  
  // O método project() é usado novamente para selecionar campos específicos da coleção "monitor_info"
  {$project: {matricula: "$monitor_info.matricula",  monitor: "$monitor_info.nome", email: "$monitor_info.email", disciplina: "$monitor_info.disciplina", feedback_length: 1}},
  
  // O método limit() é usado para limitar para retornar apenas 3 documentos (ou seja, o top 3)
  {$limit: 3}
])

//Retorne a matricula e o feedback dos monitores que informaram que tiveram um "semestre intenso"
//TEXT e SEARCH
db.feedback.createIndex({ feedback: "text" })
db.feedback.find({ $text: { $search: "\"semestre intenso\"" } }, {matricula_monitor: true, feedback: true, _id: false})

// Adicionando um monitor na aula de codigo 2
// addToSet
db.aulas.find({codigo: 2}).pretty()
db.aulas.updateOne({codigo: 2}, {$addToSet: {monitores: 20220040}})
db.aulas.find({codigo: 2}).pretty()

// Retorna a quantidade de aulas que tiveram mais de 3 horas de duracao
// $where, function, count
db.aulas.find({$where: function() {
    return this.duracao_em_horas > 3;
}}).count()

// Retorna uma das monitorias que possuem tanto Felipe Oliveira de matricula 55566677788, quanto Fernanda Almeida de matricula 20220060 como monitores
// all e findOne
db.monitoria.findOne({monitores: {$all: [55566677788, 20220060]}})

// Retorna se houve monitores o suficientes ou se faltou monitores em cada disciplina nos períodos 2022.1 e .2, com o criterio sendo se havia mais de 1 monitor
// cond, project, size
db.monitoria.aggregate(
    {$project: {
        disciplina: 1,
        periodo: 1,
        monitores: 1,
        situacao: {
            $cond: {
                if: {$gt: [{$size: "$monitores"}, 1]}, then: 'Monitores suficientes',
                else: 'Falta monitores'
            }
        }
    }}
)

//Retorna o nome e a quantidade de horas de monitoria que cada monitor ministrou
//SUM
db.aulas.aggregate([
    {$lookup: {
        from: "monitores",
        localField: "monitores",
        foreignField: "matricula",
        as: "monitor_info"
    }},
    {$unwind: "$monitor_info"},

    {$project: {
        nome: "$monitor_info.nome", horas_total: {$sum: "$duracao_em_horas"}, _id: false
    }},

    {$group: {
        _id: "$nome",
        horas_total: {$sum: "$horas_total"}
    }}
])

// Renomeia as collections feedback e monitoria para ficarem no plural
// renameCollection
db.feedback.renameCollection("feedbacks")
db.monitoria.renameCollection("monitorias")
show collections // Retorna as collections do db monitoria para mostrar que as collections foram renomeadas

// Retorna o nome da(s) disciplina(s) com maior carga horaria
// $max
db.disciplinas.aggregate([
    {$group: 
        {_id: null, max_carga_horaria: {$max: "$carga_horaria"}}
    },

    {$lookup: 
        {from: "disciplinas", localField: "max_carga_horaria", foreignField: "carga_horaria", as: "result"}
    },

    {$unwind: "$result"},
    
    {$project: 
        {_id: 0, Disciplina: "$result.nome"}
    }
])

// Retornando o nome e o número de disciplina de cada professor 	
db.disciplinas.mapReduce(
  function() {
    emit(this.professor, 1);
  },
  function(key, values) {
    return Array.sum(values);
  },
  {
    out: { inline: 1 },
    finalize: function(key, value) {
      return { professor: key, num_disciplinas: value };
    }
  }
)
