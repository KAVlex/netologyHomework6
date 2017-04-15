"use strict"

const express       = require("express");
const bodyParser    = require("body-parser");
const app = module.exports = express();

app.use(bodyParser.urlencoded({"extended": true}));

//основное задание
app.use('/v1', require('./v1'));

//в v2 поле score выставляется автоматически случайным числом
app.use('/v2', require('./v2'));