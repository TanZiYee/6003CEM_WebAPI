const mongoose = require('mongoose');

const db = "mongodb+srv://User:Zy_252811002050810@gettingstarted.wsalowo.mongodb.net/WebAPI?retryWrites=true&w=majority";

mongoose.connect(db).then(()=> {
    console.log("Connected to database");
})

.catch(()=> {
    console.log("Can't connect to database");
})

const blogsSchema = new mongoose.Schema({
    ID: { type: String},
    Title: { type: String},
    Description: { type: String},
    Image: { type: String},
    URL: { type: String}
});

const connect = mongoose.model('blog', blogsSchema);

module.exports = connect;


const axios = require('axios');

const apikey = 'si_IEPVLMlCm5WscCKfF--WT5ReILjfyVbqykPI-YfuJcA7V';
const keyword = 'Amazon';
const language = 'en';

const querystr = `https://api.currentsapi.services/v1/search?keywords=${keyword}&language=${language}&apiKey=${apikey}`;


axios.get(querystr).then( (response) =>{
    ID = response.data.news[0].id;
    Title = response.data.news[0].title;
    Description = response.data.news[0].description;
    Image = response.data.news[0].image;
    URL = response.data.news[0].url;

    blogsValue = new connect ({
        ID:response.data.news[0].id,
        Title:response.data.news[0].title,
        Description:response.data.news[0].description,
        Image:response.data.news[0].image,
        URL:response.data.news[0].url
    });

    blogsValue.save().then(result=> {
        console.log("Success" + result);
    })

    .catch(error=> {
        console.log("Error" + error);
    });
}
);