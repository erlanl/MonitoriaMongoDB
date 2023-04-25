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
db.disciplinas.updateOne({codigo: "IF668"}, {$set: {professor: "Filipe Calegario"}})
db.disciplinas.find({codigo: "IF668"}).pretty() // exibe os dados da disciplina de introdução à computação, mostrando que a alteração foi feita

//Retorne o top 3 dos monitores com maiores feedbacks, retornem também a quantidade de caracteres do feedback, nome, email e matricula do monitor, assim como o código da discplina monitorada por ele.
//LIMIT, LOOKUP, PROJECT
db.feedback.aggregate([
    {$project: {_id: 0, matricula_monitor: 1, disciplina: 1, email: 1, feedback_length: {$strLenCP: "$feedback"}}},
    {$sort: {feedback_length: -1}},
    {$lookup: {
      from: "monitores",
      localField: "matricula_monitor",
      foreignField: "matricula",
      as: "monitor_info"
    }},
    {$unwind: "$monitor_info"},
    {$project: {matricula_monitor: "$monitor_info.matricula",  nome_monitor: "$monitor_info.nome", email_monitor: "$monitor_info.email", disciplina_monitorada: "$monitor_info.disciplina", feedback_length: 1}},
    {$limit: 3}
])

//Verifique a matricula e o feedback dos monitores que informaram que tiveram um "semestre intenso"
//TEXT e SEARCH
db.feedback.createIndex({ feedback: "text" })
db.feedback.find({ $text: { $search: "semestre intenso" } }, {matricula_monitor: true, feedback: true, _id: false})

// Adicionando um monitor na aula de codigo 2
// addToSet
db.aulas.updateOne({codigo: 2}, {$addToSet: {monitores: 20220040}})

// Contando a quantidade de aulas que tiveram mais de 3 horas de duracao
// $where, function, count
db.aulas.find({$where: function() {
    return this.duracao_em_horas > 3;
}}).count()

// Retorna uma das monitorias que possuem tanto Felipe Oliveira, quanto Fernanda Almeida como monitores
// all e findOne
db.monitoria.findOne({monitores: {$all: [55566677788, 20220060]}})

// Retorna se houve monitores o suficientes em cada disciplina nos períodos 2022.1 e .2, com o criterio sendo se havia mais de 1 monitor
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

//retorna o nome e a quantidade de horas de monitoria que o monitor ministrouimage.png
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

//USE
//MAX
//MAPREDUCE
//SAVE
//RENAMECOLLECTION