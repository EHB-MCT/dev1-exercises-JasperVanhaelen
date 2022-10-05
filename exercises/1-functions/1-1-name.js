"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawName();

function drawName() {
    context.beginPath();
    context.moveTo(50, 100);
    context.lineWidth = 8;
    context.strokeStyle = "orange";
    context.lineTo(120, 100);
    context.lineTo(120, 200);
    context.lineTo(80, 200);
    context.stroke();

    context.beginPath();
    context.strokeStyle = "brown";
    context.moveTo(200, 200);
    context.lineTo(220, 100);
    context.lineTo(240, 200);
    context.moveTo(200, 160);
    context.lineTo(240, 160);
    context.stroke();

    context.beginPath();
    context.strokeStyle = "lightblue";
    context.moveTo(300, 200);
    context.lineTo(350, 200);
    context.lineTo(350, 150);
    context.lineTo(300, 150);
    context.lineTo(300, 100);
    context.lineTo(350, 100);
    context.stroke();

    context.beginPath();
    context.strokeStyle = "darkblue";
    context.moveTo(450, 200);
    context.lineTo(450, 100);
    context.lineTo(500, 100);
    context.lineTo(500, 150);
    context.lineTo(450, 150);
    context.stroke();

    context.beginPath();
    context.strokeStyle = "lightgreen";
    context.moveTo(600, 200);
    context.lineTo(600, 100);
    context.lineTo(650, 100);
    context.moveTo(600, 150);
    context.lineTo(650, 150);
    context.moveTo(650, 200);
    context.lineTo(600, 200);
    context.stroke();

    context.beginPath();
    context.strokeStyle = "#FF00FF";
    context.moveTo(750, 200);
    context.lineTo(750, 100);
    context.lineTo(800, 100);
    context.lineTo(800, 150);
    context.lineTo(760, 150);
    context.lineTo(800, 200);
    context.stroke();

}