// alert("Welcome!")

// Starter Code
var tableData = data;


// Viewing the available data fromt he data.js
// console.log(tableData);


// Creating References
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");

// @TODO : Create said buttons for new said var inputs
// var inputFieldState = d3.select("#state");
// var inputFieldCountry = d3.select("#country");
// var inputFieldShape = d3.select("shape");

var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]
// console.log(columns);

