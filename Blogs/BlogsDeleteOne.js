const connect = require('./BlogsConnect')

connect.deleteOne({ID:"ebc4108b-bd26-4fe1-a6c2-a0dd802b2df6"}).then(res=> {
    console.log("Success deleting one");
});