const connect = require('./ArticlesConnect')

//replace the movies after adding comma
connect.updateOne({Source:"The New York Times"}, {Source:"Google"}).then(res=> {
    console.log("Successfully update");
});

