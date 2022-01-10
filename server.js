import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 3000;

app.use(express.static(join(__dirname, "static")));
app.use("/static", express.static(join(__dirname, "static")));
app.use("/src", express.static(join(__dirname, "src")));


app.listen(PORT, function (request, response) {
    console.log(`Server started at ${PORT}`);
});