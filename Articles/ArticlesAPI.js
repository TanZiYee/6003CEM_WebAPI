const mongoose = require('mongoose');

const db = "mongodb+srv://User:Zy_252811002050810@gettingstarted.wsalowo.mongodb.net/WebAPI?retryWrites=true&w=majority";

mongoose.connect(db).then(()=> {
    console.log("Connected to database");
})

.catch(()=> {
    console.log("Can't connect to database");
})

const articlesSchema = new mongoose.Schema({
    Abstract:{ type: String},
    Source:{ type: String},
    WebURL:{ type: String}
});

const connect = mongoose.model('article', articlesSchema);

module.exports = connect;


const axios = require('axios');

const apikey = '2vUzIsDDLFfeHjc6Oup7XqMlvPb7jeF9';
const keyword = 'Georgetown';

const querystr = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&api-key=${apikey}`;

axios.get(querystr).then( (response) =>{
    Abstract = response.data.response.docs[0].abstract;
    Source = response.data.response.docs[0].source;
    WebURL = response.data.response.docs[0].web_url;

    articlesValue = new connect ({
        Abstract:response.data.response.docs[0].abstract,
        Source:response.data.response.docs[0].source,
        WebURL:response.data.response.docs[0].web_url
    });

    articlesValue.save().then(result=> {
        console.log("Success" + result);
    })

    .catch(error=> {
        console.log("Error" + error);
    });
}
);