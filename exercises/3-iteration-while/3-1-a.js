"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawLines();
}

function drawLines() {
    let i = 0;
    let margin = 87.5;
    while (i < 10) {
        Utils.drawLine(75, margin + (i * 25), 320, margin + (i * 25));
        i++;
    }
}