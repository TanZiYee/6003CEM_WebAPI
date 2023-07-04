const connect = require('./ConnectWeather')

connect.deleteMany().then(res=> {
    console.log("Successfully deleting all");
});

