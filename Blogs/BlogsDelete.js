const connect = require('./BlogsConnect')

connect.deleteMany().then(res=> {
    console.log("Successfully deleting all");
});

