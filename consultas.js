//Selecione o nome e código das disciplina das monitorias que possuem 2 ou mais monitores
//$size, $exists, $eq, $gte, $find
db.disciplinas.find({
    codigo: {$in:db.monitoria.distinct("disciplina", {
        monitores: { $exists: true, $ne: [] },
        $expr: { $gte: [ { $size: "$monitores" }, 2 ] }
    })}

}, {nome: true, codigo: true, _id: false})

//USE
//AGGREGATE
//MATCH
//PROJECT
//GROUP
//SUM
//COUNT
//MAX
//AVG
//SORT
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