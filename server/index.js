require("dotenv").config();

const express = require("express");
const sequelize = require("./db");
const models = require("./models/models");
const cors = require("cors");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");

const PORT = process.env.PORT || 5100;

const app = express();
app.use(cors());
//чтоб могли парсить json
app.use(express.json());
app.use("/api", router);

//обработчик ошибок
//middleware с ошибками должен быть записан в самом конце подключения
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate(); // connect to bd
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
