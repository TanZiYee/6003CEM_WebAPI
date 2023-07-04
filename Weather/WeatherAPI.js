const mongoose = require('mongoose');

const db = "mongodb+srv://User:Zy_252811002050810@gettingstarted.wsalowo.mongodb.net/WebAPI?retryWrites=true&w=majority";

mongoose.connect(db).then(()=> {
    console.log("Connected to database");
})

.catch(()=> {
    console.log("Can't connect to database");
})

const weatherSchema = new mongoose.Schema({
    dt_txt: { type: String},
    Temp: { type: String}

});

const connect = mongoose.model('weather', weatherSchema);

module.exports = connect;


const axios = require('axios');

const apikey = '4acf4679874bc46391b2bf697d3ccbe5';
const lat = '44.34';
const lon = '10.99';

const querystr = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}`;


axios.get(querystr).then( (response) =>{
    dt_txt = response.data.list[0].dt_txt;
    Temp = response.data.list[0].main.temp;

    weatherValue = new connect ({
        dt_txt:response.data.list[0].dt_txt,
        Temp:response.data.list[0].main.temp
    });

    weatherValue.save().then(result=> {
        console.log("Success" + result);
    })

    .catch(error=> {
        console.log("Error" + error);
    });
}
);