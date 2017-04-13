"use strict"

const express = require("express");
const app = module.exports = express();

//основное задание
app.use('/v1', require('./v1'));

//в v2 поле score выставляется автоматически случайным числом
app.use('/v2', require('./v2'));