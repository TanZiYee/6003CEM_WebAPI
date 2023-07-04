const connect = require('./ArticlesConnect')

connect.deleteMany().then(res=> {
    console.log("Successfully deleting all");
});

