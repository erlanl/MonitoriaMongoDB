//Selecione o nome e código das disciplina das monitorias que possuem 2 ou mais monitores
//$size, $exists, $eq, $gte, $find
db.disciplinas.find({
    codigo: {$in:db.monitoria.distinct("disciplina", {
        monitores: { $exists: true, $ne: [] },
        $expr: { $gte: [ { $size: "$monitores" }, 2 ] }
    })}

}, {nome: true, codigo: true, _id: false})

//USE
// Calcula a média da duração das monitorias de cada disciplina de 2022.1
// aggregate, match, group, avg, sort
db.aulas.aggregate([
    { $match: {data: {$gt: new Date('2022-01-01'), $lt: new Date('2022-06-01')}}},
    { $group: {_id: "$disciplina", avgValue: {$avg: "$duracao_em_horas"}}},
    { $sort: {avgValue: -1}}
])

//PROJECT
//SUM
//COUNT
//MAX
//LIMIT
//MAPREDUCE
//FUNCTION
//PRETTY
//ALL
//SET
//TEXT
//$WHERE
//SEARCH
//FILTER
//UPDATE
//SAVE
//RENAMECOLLECTION
//COND
//LOOKUP
//FINDONE
//ADDTOSET