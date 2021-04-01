let dbObj = {}

dbObj.user = [
    {
        name:'Alvin',
        city:'Amsterdam'
    },
    {
        name:'Sarah',
        city:'Helsinki'
    }
]

dbObj.dbQuery = {
    find:(table) => {return `Select * from ${table}`},
    insert:(table,data) => {return `insert into ${table} name,city Values (${data.name}, ${data.city})`}
}

//es5
// module.exports = dbObj;

//es6
export default dbObj;