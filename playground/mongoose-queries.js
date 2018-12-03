const { ObjectID } = require("mongodb");
const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

var id = "5c000940ba245888c5915957";

if (!ObjectID.isValid(id)) {
  console.log("ID not valid");
}

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log("Todos", todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log("Todo", todo);
// });

User.findById(id)
  .then(
    user => {
      if (!user) {
        return console.log("User not found");
      }
      console.log(JSON.stringify(user, undefined, 2));
    },
    e => {
      console.log(e);
    }
  )
  .catch(e => console.log(e));
