const morgan = require('morgan');
const express = require('express');
// const client = require("./db");
const app = express()
app.use(morgan("dev"));
app.use(express.static(__dirname + "/"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
const { db, Page, User } = require('./models');
const models = require('./models');



app.get('/', function (req, res) {
  res.send('.views/layout')
})

db.authenticate().
then(() => {
  console.log('You are connected to the Database');
})









const init = async () => {
  // await models.Page.sync()
  // await models.User.sync()
  await models.db.sync({force: true})
  
  const PORT = 1337;
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}

init();


