const ApiError = require("../error/ApiError");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Basket } = require("../models/models");

class UserController {
  async registration(req, res) {
    const { email, password, role } = req.body;
    //как сделать норм валидацию лучше взять с другого примера
    if (!email || !password) {
      return next(ApiError.badRequest("Некорректный email или password"));
    }

    //проверка существует ли емейл в базе
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(
        ApiError.badRequest("Пользователь с таким email уже существует")
      );
    }

    //если такого емейла в базе нет тогда создаем нового пользователя и хегируем пароль
    //первым параметром передаем пароль вторым сколько будем хешировать раз
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, role, password: hashPassword });
    const basket = await Basket.create({ userId: user.id });
    const jwt = jwt.sign({ id: user.id, email, role });
  }

  async login(req, res) {}

  async check(req, res, next) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest("Не задан ID"));
    }
    res.json(id);
  }
}

module.exports = new UserController();
