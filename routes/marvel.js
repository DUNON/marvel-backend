const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/comics", async (req, res) => {
  try {
    let page;
    const limit = 100;
    const offset = limit * (page - 1);
    if (Number(req.query.page) < 1) {
      page = 1;
    } else {
      page = Number(req.query.page);
    }
    console.log(page);
    // const queryParams= qs.stringify({
    //     page:req.query.page,
    //     limit:Number(100),
    //     offset: limit * (page - 1)

    // })
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.APIKEY}&limit=${limit}&page=${page}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/characters", async (req, res) => {
  try {
    let page;
    const limit = 100;
    const offset = limit * (page - 1);
    if (Number(req.query.page) < 1) {
      page = 1;
    } else {
      page = Number(req.query.page);
    }

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.APIKEY}&limit=${limit}&page=${page}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/comics/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params.id}?apiKey=${process.env.APIKEY}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
  }
});
module.exports = router;
