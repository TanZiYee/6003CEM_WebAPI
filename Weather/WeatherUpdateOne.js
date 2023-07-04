const connect = require('./ConnectWeather')

//replace the movies after adding comma
connect.updateOne({dt_txt:"2023-06-30 21:00:00"}, {dt_txt:"2002-11-25"}).then(res=> {
    console.log("Successfully update");
});

