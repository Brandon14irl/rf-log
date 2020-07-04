
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({ items: [] })
.write()



function addDB() {
    db.get('items')
    .push(
        { Name: document.getElementById("nameTXT").value,
          Freq: document.getElementById("freqTXT").value 
        })
    .write()
}