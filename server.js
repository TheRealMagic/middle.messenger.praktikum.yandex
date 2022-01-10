import express from "express";

const app = express();
const PORT = 3000;

app.use(express.static("static/"));
app.use("/src", express.static("src"));


app.listen(PORT, function(request, response) {
    console.log(`Server started at ${PORT}`);
});