require('dotenv').config()
require('./app/config/database').connect()
const express = require("express");
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes/routes')
app.use('/', routes)

app.use("*", (req, res) => {
    const error_msg = {
      success: false,
      data: {},
      error: {
        code: 404,
        error: 'Page not found'
      }
    };
    return res.status(404).send(error_msg);
});

app.listen(process.env.PORT, () => {
    console.log(`Server on the port: ${process.env.PORT}`)
})