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

        // db.collection('Todos').findOneAndUpdate({
        //     _id: new ObjectID('5bfe9a1631a4dc85c0b4740f')
        // }, {
        //     $set: {
        //         completed: true
        //     }
        // }, {
        //     returnOriginal: false
        // }).then((result) => {
        //     console.log(result);
        // });

        db.collection('Users').findOneAndUpdate({
            _id: new ObjectID('5bfc094b3113dd737c1d429c')
        }, {
            $set: {
                name: 'Doogie'
            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });

        //db.close();
    }
);