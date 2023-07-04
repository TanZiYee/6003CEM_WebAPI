const connect = require('./NewsConnect')

connect.deleteOne({Title:"Hot weather affecting padi yields"}).then(res=> {
    console.log("Success deleting one");
});