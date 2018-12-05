const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

// Todo.remove({}).then(result => {
//   console.log(result);
// });

// Todo.findOneAndRemove({id: '5c07d20a604589ba97b079a8'})

Todo.findByIdAndRemove("5c07d20a604589ba97b079a8").then(todo => {
  console.log(todo);
});
