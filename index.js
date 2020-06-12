const express = require("express");
const app = express();
const axios = require("axios");

app.get("/", async (req, res) => {
  res.sendFile(__dirname + "/solution/index.html");
});

app.get("/api", async (req, res) => {
  const url = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart?interval=5m&region=US&symbol=AAPL&lang=en&range=1d`;

  const { data } = await axios
    .get(url, {
      headers: {
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "X-RapidAPI-Key": "d7a06c4de8mshc44f52cc711b7cbp1075dcjsn2083d9c41b7a",
      },
    })
    .catch((e) => console.error(e));

  console.log("data: ", data);

  res.json(await data);
});
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Application started on PORT: ${PORT}`);
});
