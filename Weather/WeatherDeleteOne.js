const connect = require('./ConnectWeather')

connect.deleteOne({dt_txt:"2023-07-01 18:00:00"}).then(res=> {
    console.log("Success deleting one");
});