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