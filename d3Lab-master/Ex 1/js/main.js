var svg = d3.select("#chart-area")
    .append("svg")
    .attr("width", 400)
    .attr("height", 400);
var circle = svg.append("circle")
    .attr("cx", 100)
    .attr("cy", 250)
    .attr("r", 70)
    .attr("fill", "blue");
var rect = svg.append("rect")
    .attr("x", 20)
    .attr("y", 20)
    .attr("width", 20)
    .attr("height", 20)
    .attr("fill", "red");

var circle = svg.append("circle")
    .attr("cx", 10)
    .attr("cy", 20)
    .attr("r", 10)
    .attr("fill", "white");
var rect = svg.append("rect")
    .attr("x", 200)
    .attr("y", 10)
    .attr("width", 10)
    .attr("height", 80)
    .attr("fill", "yellow");

var circle = svg.append("circle")
    .attr("cx", 300)
    .attr("cy", 450)
    .attr("r", 90)
    .attr("fill", "black");
var rect = svg.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 5)
    .attr("height", 200)
    .attr("fill", "green");