// const MongoClient = require("mongodb").MongoClient;
const {
    MongoClient,
    ObjectID
} = require("mongodb");

MongoClient.connect(
    "mongodb://localhost:27017/TodoApp",
    (err, db) => {
        if (err) {
            return console.log("Unable to connect to MongoDB server");
        }
        console.log("Connected to MongoDB server");

        // db.collection('Users').deleteMany({
        //     name: 'Andrew'
        // }).then((result) => {
        //     console.log(result);
        // });

        db.collection('Users').findOneAndDelete({
            _id: new ObjectID('5bfc09c4a7f3158b9cf0a1a4')
        }).then((result) => {
            console.log(result);
        });

        //db.close();
    }
);