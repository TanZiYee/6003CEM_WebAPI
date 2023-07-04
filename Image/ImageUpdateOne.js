const connect = require('./ImageConnect')

//replace the movies after adding comma
connect.updateOne({Tags:"basketball, game, basket"}, {Tags:"Octopus"}).then(res=> {
    console.log("Successfully update");
});

