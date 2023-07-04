const mongoose = require('mongoose');

const db = "mongodb+srv://User:Zy_252811002050810@gettingstarted.wsalowo.mongodb.net/WebAPI?retryWrites=true&w=majority";

mongoose.connect(db).then(()=> {
    console.log("Connected to database");
})

.catch(()=> {
    console.log("Can't connect to database");
})

const imageSchema = new mongoose.Schema({
    previewURL: { type: String},
    Tags: { type: String},
    User: { type: String},
    PageURL: { type: String}
});

const connect = mongoose.model('image', imageSchema);

module.exports = connect;


const axios = require('axios');

const apikey = '37247382-445633ba517244c97eb7c9033';
const keyword = 'Georgetown';

const querystr = `https://pixabay.com/api/?key=${apikey}&q=${keyword}&apikey=${apikey}`; 


axios.get(querystr).then( (response) =>{
    previewURL = response.data.hits[0].previewURL;
    Tags = response.data.hits[0].tags;
    User = response.data.hits[0].user;
    PageURL = response.data.hits[0].pageURL;

    imageValue = new connect ({
        previewURL:response.data.hits[0].previewURL,
        Tags:response.data.hits[0].tags,
        User:response.data.hits[0].user,
        PageURL:response.data.hits[0].pageURL,
    });

    imageValue.save().then(result=> {
        console.log("Success" + result);
    })

    .catch(error=> {
        console.log("Error" + error);
});
}
);