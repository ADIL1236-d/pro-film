const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})

app.get("/", (req, res) =>{
    res.send("data")
})

app.post("/", (req, res) =>{
    res.send("data")
})

app.put("/", (req, res) =>{
    res.send("data")
})

app.delete("/", (req, res) =>{
    res.send("data")
})

app.patch("/", (req, res) =>{
    res.send("data")
})

app.options("/", (req, res) =>{
    res.send("data")
})

app.head("/", (req, res) =>{
    res.send("data")
})

app.trace("/", (req, res) =>{
    res.send("data")
})

app.connect("/", (req, res) =>{
    res.send("data")
})
