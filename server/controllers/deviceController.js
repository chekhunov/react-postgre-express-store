const uuid = require("uuid");
const { Device } = require("../models/models");
const ApiError = require("../error/ApiError");

class DeviceController {
  // получаем данные из тела запроса
  async create(req, res) {
    try {
      const { name, price, brandId, typeId, info } = req.body;
      const { ing } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.v4(path.resove(__dirname, "..", "static", fileName));

      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
      });

      return res.json(device);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getOne(req, res) {}
  async getAll(req, res) {}
}

module.exports = new DeviceController();
