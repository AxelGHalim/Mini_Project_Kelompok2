const express = require("express")
const PORT = 2000
const app = express()
const db = require("./models");
const { authRouter } = require("./router");
// const cors = require("cors")

app.use(express.json());
// app.use(cors());

const { authRouter } = require("./router");
app.use("/user", authRouter);

app.listen(PORT, ()=> {
    db.sequelize.sync({alter: true})
    console.log(`Server running at PORT: ${PORT}`)
});