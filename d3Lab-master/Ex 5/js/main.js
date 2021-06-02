var svg = d3.select("#chart-area")
    .append("svg")
    .attr("width", 600)
    .attr("height", 400);
var colours = ["black", "red", "green", "blue", "yellow"]
var build = d3.json("https://raw.githubusercontent.com/gcastillo56/d3Lab/master/resources/data/buildings.json").then((data) => {
    var n_list = data.map((d) => {
        return d.name;
    });
    var x = d3.scaleBand()
        .domain(n_list)
        .range([0, 600])
        .paddingInner(0.3);

    var y = d3.scaleLinear()
        .domain([0, 3840])
        .range([0, 2160]);

    var colour = d3.scaleOrdinal()
        .domain(n_list)
        .range(d3.schemeSet3);

    var rect = svg.selectAll("rect")
        .data(data);

    rect.enter()
        .append("rect")
        .attr("x", (d) => {
            return x(d.name);
        })
        .attr("y", (d) => {
            return 500 - y(d.height);
        })
        .attr("width", x.bandwidth())
        .attr("height", (d) => {
            return y(d.height);
        })
        .attr("fill", (d, i) => {
            return colours[i % 5];
        })
});