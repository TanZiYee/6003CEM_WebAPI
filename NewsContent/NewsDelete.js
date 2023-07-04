const connect = require('./NewsConnect')

connect.deleteMany().then(res=> {
    console.log("Successfully deleting all");
});

