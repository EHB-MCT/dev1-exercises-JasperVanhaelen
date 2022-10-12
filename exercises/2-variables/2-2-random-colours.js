"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;

drawRectangles(50, 50, 500);
drawRectangles(75, 75, 450);
drawRectangles(100, 100, 400);
drawRectangles(125, 125, 350);
drawRectangles(150, 150, 300);
drawRectangles(175, 175, 250);
drawRectangles(200, 200, 200);
drawRectangles(225, 225, 150);

function drawRectangles(x, y, size) {

    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = "rgb(" + r + "," + g + "," + b + ")";
    context.fillStyle = color;

    context.fillRect(x, y, size, size);
}