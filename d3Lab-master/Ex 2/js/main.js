var svg = d3.select("#chart-area")
    .append("svg")
    .attr("width", 400)
    .attr("height", 400);
var data = [25, 20, 15, 10, 5];
var colours = ["black", "red", "green", "blue", "yellow", ]
var rect = svg.selectAll("rect").data(data);
rect.enter()
    .append("rect")
    .attr("x", (d, i) => {
        return (d * 10) - 40
    })
    .attr("y", (d) => {
        return 400 - d * 10;
    })
    .attr("width", 40)
    .attr("height", (d) => {
        return d * 100
    })
    .attr("fill", (d, i) => {
        return colours[i]
    })