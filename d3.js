/** 
 * @param {object}
 * @property {number} top -top margin
 * @property {number} right -right margin
 * @property {number} bottom -bottom margin
 * @property {number} left -left margin
 */
var margin = {top: 30, right: 30, bottom: 70, left: 60},
    width = 700 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page

var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Parse the Data
d3.csv("cmoa.csv", function(data) {
    console.log(data)
    let result = [];
// Iterates through the whole column and counts the number 
    data.forEach(function(a) {
        if (!this[a.classification]) {
            this[a.classification] = {
                classification: a.classification,
                orders: 0
            };
            result.push(this[a.classification]);
        }
        this[a.classification].orders += 1;
    }, Object.create(null));
    console.log(result)

  // Sort data from biggest to smallest
  result.sort(function(b, a) {
    return a.orders - b.orders;
  });
  result = result.slice(0,20);
  
  // X axis
  var x = d3.scaleBand()
    .range([ 0, width ])
    .domain(result.map(function(d) { return d.classification; }))
    .padding(0.2);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 9000])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // Bars
  svg.selectAll("mybar")
    .data(result)
    .enter()
    .append("rect")
        .attr("x", function(d) { return x(d.classification); })
        .attr("y", function(d) { return y(d.orders); })
        .attr("width", x.bandwidth())
        .attr("height", function(d) { return height - y(d.orders); })
        .attr("fill", "rgb(11, 97, 184)")
        .append("title")
        .text((d)=> {
            return d.orders
         });
            
     

})
/**
 * Hides the D3 display when clicked
 * @function
 * @name d3graph
 */
function d3graph(){
    const x = document.getElementById("my_dataviz");
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } 
    else { 
        x.style.display = 'none';

    }
}
/**
 * Sends an alert when button is clicked
 * @function 
 * @name formsubmission
 */
 function formsubmission() {
    alert("You have successfully signed up for our mailing list!");
    
}

var button = document.getElementById("button-addon2")
var input = document.getElementById("button-addon1");

console.log(input)
console.log(button)


document.getElementById("button-addon2").addEventListener("click", function() {
  console.log('click')
  if (input.value === "") {
    alert("Please enter a valid input");
  } else {
    alert("You have successfully signed up for our mailing list!");
  }
});
