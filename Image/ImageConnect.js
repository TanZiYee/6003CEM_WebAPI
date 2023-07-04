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
