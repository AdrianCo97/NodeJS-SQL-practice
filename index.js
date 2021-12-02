const express = require("express");
const app = express();
const PORT = 3000;


app.get("/", (req, res) => {
   res.send("Banana");
})

app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`)
})



