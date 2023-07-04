const mongoose = require('mongoose');

const db = "mongodb+srv://User:Zy_252811002050810@gettingstarted.wsalowo.mongodb.net/WebAPI?retryWrites=true&w=majority";

mongoose.connect(db).then(()=> {
    console.log("Connected to database");
})

.catch(()=> {
    console.log("Can't connect to database");
})

const newsSchema = new mongoose.Schema({
    Title: { type: String},
    Description: { type: String},
    URL: { type: String},
    Image: { type: String}
});

const connect = mongoose.model('news', newsSchema);

module.exports = connect;


const axios = require('axios');

const apikey = 'b44458b0f0a14c3eb6caa0a1ecb606f8';
const news = 'Penang Weather';

const querystr = `https://newsapi.org/v2/everything?q=${news}&apiKey=${apikey}`;


axios.get(querystr).then( (response) =>{
    Title = response.data.articles[0].title;
    Description = response.data.articles[0].description;
    URL = response.data.articles[0].url;
    Image = response.data.articles[0].urlToImage;

    newsValue = new connect ({
        Title:response.data.articles[0].title,
        Description:response.data.articles[0].description,
        URL:response.data.articles[0].url,
        Image:response.data.articles[0].urlToImage
    });

    newsValue.save().then(result=> {
        console.log("Success" + result);
    })

    .catch(error=> {
        console.log("Error" + error);
    });
}
);