/* import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from 'url'; 

const __dirname = dirname(fileURLToPath(import.meta.url));*/

const express = require("express");
const {join} = require("path");

const app = express();
const PORT = process.env.PORT || 3000;;

app.use(express.static(join(__dirname, "static")));
app.use("/static", express.static(join(__dirname, "static")));
app.use("/src", express.static(join(__dirname, "src")));

/*app.use(express.static(join(__dirname, "dist/static")));
app.use("/static", express.static(join(__dirname, "dist/static")));
app.use("/src", express.static(join(__dirname, "dist/src")));*/


app.listen(PORT, (request, response) => {
    console.log(`Server started at ${PORT}`);
});
