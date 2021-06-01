var svg = d3.select("#chart-area")
    .append("svg")
    .attr("width", 400)
    .attr("height", 400);
var colours = ["black", "red", "green", "blue", "yellow"]
d3.csv("https://raw.githubusercontent.com/gcastillo56/d3Lab/master/resources/data/ages.csv").then((data) => {
    data.forEach((d) => {
        d.age = +d.age;
    });
    console.log("CSV DATA");
    console.log(data);
});
d3.tsv("https://raw.githubusercontent.com/gcastillo56/d3Lab/master/resources/data/ages.tsv").then((data) => {
    data.forEach((d) => {
        d.age = +d.age;
    });
    console.log("TSV DATA");
    console.log(data);
});
d3.json("https://raw.githubusercontent.com/gcastillo56/d3Lab/master/resources/data/ages.json").then((data) => {
    data.forEach((d) => {
        d.age = +d.age;
    });
    console.log("JSON DATA");
    console.log(data);
});
d3.json("https://raw.githubusercontent.com/gcastillo56/d3Lab/master/resources/data/ages.json").then((data) => {
    data.forEach((d) => {
        d.age = +d.age;
    });
    var cir = svg.selectAll("circle").data(data);

    cir.enter()
        .append("circle")
        .attr("cx", (d, i) => {
            return i * 25 + 10;
        })
        .attr("cy", 200)
        .attr("r", (d) => {
            return d.age;
        })
        .attr("fill", (d, i) => {
            if (d.age >= 10) {
                return colours[i % 5]
            }
            return colours[0]
        })
});