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

// Inputting the data into HTML
var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
            )
    });
}

addData(tableData);

//Create an Event Listener for the button
//Set up Filter Button for date and city
button.on("click", ()=> {

    d3.event.preventDefault();

    var inputDate = inputFieldDate.property("value").trim();
    // console.log(inputDate)
    var inputCity = inputFieldCity.property("value").toLowerCase().trim();


    // console.log(inputCity)
    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    // console.log(filterDate)
    var filterCity = tableData.filter(tableData => tableData.city === inputCity);
    //console.log(filterCity)

    var filterCombinedData = tableData.filter(tableData => tableData.datetime === inputDate && tableData.city === inputCity);
    //console.log(filterCombinedData)

})