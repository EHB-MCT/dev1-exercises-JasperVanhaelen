"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;

let randomX = Math.floor(Math.random() * width);
let randomY = Math.floor(Math.random() * height);

let size = 200;

let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);
let color = "rgb(" + r + "," + g + "," + b + ")";

context.fillRect(randomX, randomY, size, size);