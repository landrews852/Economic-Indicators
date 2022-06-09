const axios = require("axios");

const API_URL = "https://mindicador.cl/api";

const getAllIndicators = async (req, res) => {
  try {
    const url = await axios.get(API_URL);
    const data = url.data;
    var indicators = [];

    for (const property in data) {
      if (
        property !== "version" &&
        property !== "autor" &&
        property !== "fecha"
      ) {
        indicators = [...indicators, data[property]];
      }
    }

    res.json(indicators);
  } catch (error) {
    res.status(500).send(error);
    console.error(error);
  }
};

const getIndicatorByCode = async (req, res) => {
  const { code } = req.params;
  try {
    const url = await axios.get(API_URL + "/" + code);
    const data = url.data;

    res.json(data);
  } catch (error) {
    res.status(500).send(error);
    console.error(error);
  }
};

const getIndicatorByDate = async (req, res) => {
  const { code, date } = req.params;
  try {
    const url = await axios.get(API_URL + "/" + code + "/" + date);
    const data = url.data;

    res.json(data);
  } catch (error) {
    res.status(500).send(error);
    console.error(error);
  }
};

module.exports = {
  getAllIndicators,
  getIndicatorByCode,
  getIndicatorByDate,
};
