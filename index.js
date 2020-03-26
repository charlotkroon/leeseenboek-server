const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const userRouter = require("./user/router");
const loginRouter = require("./auth/router");
const bookRouter = require("./book/router");

const app = express();

const port = 4000;

const corsMiddleware = cors();
const parserMiddleware = bodyParser.json();
app.use(corsMiddleware, parserMiddleware);

app.use(userRouter);
app.use(loginRouter);
app.use(bookRouter);

app.listen(port, () =>
  console.log(`LEES EEN BOEK is listening to port ${port}`)
);
