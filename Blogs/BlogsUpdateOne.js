const connect = require('./BlogsConnect')

//replace the movies after adding comma
connect.updateOne({ID:"111"}, {ID:"1234565"}).then(res=> {
    console.log("Successfully update");
});

