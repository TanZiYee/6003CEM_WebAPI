const connect = require('./ImageConnect')

connect.deleteOne({Tags:"basketball, game, basket"}).then(res=> {
    console.log("Success deleting one");
});