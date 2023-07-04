const connect = require('./NewsConnect')

//replace the movies after adding comma
connect.updateOne({Title:"Hot weather affecting padi yields"}, {Title:"Banana"}).then(res=> {
    console.log("Successfully update");
});

