const connect = require('./ArticlesConnect')

connect.deleteOne({Source:"The New York Times"}).then(res=> {
    console.log("Success deleting one");
});