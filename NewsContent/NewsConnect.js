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