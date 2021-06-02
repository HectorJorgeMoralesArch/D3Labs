/*
 *    main.js
 */

const margin = {
    top: 10,
    right: 10,
    bottom: 150,
    left: 100
};
var colours = ["black", "red", "green", "blue", "yellow"]
const width = 600;
const height = 400;

const g = d3.select("#chart-area")
    .append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

var data = [];

const main = async() => {
    console.log("Main start");
    data = await d3.json("https://raw.githubusercontent.com/gcastillo56/d3Lab/master/projects/brewery/data/revenues.json");
    var months = [];
    var maxRev = 0;
    data.map((d) => {
        months.push(d.month);
        d.revenue = parseFloat(d.revenue);
        d.profit = parseFloat(d.profit);

        if (d.revenue > maxRev) {
            maxRev = d.revenue;
        }
    });

    const x = d3.scaleBand().domain(months).range([0, width]).paddingInner(0.3).paddingOuter(0.3);
    const y = d3.scaleLinear().domain([0, maxRev]).range([height, 0]);

    /** Labeling */
    g.append("text")
        .attr("class", "y axis-label")
        .attr("x", -(height / 2))
        .attr("y", -60)
        .attr("font-size", "20px")
        .attr("text-anchor", "middle")
        .attr("transform", "rotate(-90)")
        .style("fill", "black")
        .text("Revenue (dlls.)");

    g.append("text")
        .attr("class", "x axis-label")
        .attr("x", width / 2)
        .attr("y", height + margin.bottom / 2)
        .attr("font-size", "20px")
        .attr("text-anchor", "middle")
        .style("fill", "black")
        .text("Month");

    const bottomAxis = d3.axisBottom(x).ticks(months.length).tickValues(months).tickPadding(2);
    const leftAxis = d3
        .axisLeft(y)
        .ticks(5)
        .tickFormat((d) => {
            return "$" + d;
        });

    g.append("g")
        .attr("class", "bottom axis")
        .attr("transform", "translate(0, " + height + ")")
        .call(bottomAxis)
        .selectAll("text")
        .attr("x", "15")
        .attr("text-anchor", "end")
        .style("fill", "black");

    g.append("g").attr("class", "left axis").call(leftAxis).selectAll("text").style("fill", "black");

    console.log(`data`, data);

    /** Data Render */
    var rect = g.selectAll("rect").data(data);

    rect
        .enter()
        .append("rect")
        .attr("x", (d, i) => {
            return x(d.month);
        })
        .attr("y", (d) => {
            return y(d.revenue);
        })
        .attr("width", 60)
        .attr("height", (d) => {
            return height - y(d.revenue);
        })
        .attr("fill", (d, i) => {
            return colours[i % 5]
        });
};
main();