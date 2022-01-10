const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static(__dirname + "/dist"));
app.use(express.static(__dirname + "/dist/static"));
app.use("/static", express.static(__dirname + "/dist/static"));
app.use("/src/pages", express.static(__dirname + "/dist/src/pages"));

app.listen(PORT, function(request, response) {
    console.log(`Server started at ${PORT}`);
});