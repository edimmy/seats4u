export function createTable(showReports) {
  let table = document.getElementById("report"); //return first "table" element

  let row_names = {
    name: "Show Name",
    is_active: "Active",
    seats_sold: "Seats Sold",
    seats_remaining: "Seats Remaining",
    proceeds: "Total Proceeds"
  };

  //let allEntries = showReports.unshift(row_names); //add row names to the front of the array

  let showReportsNew = [row_names].concat(showReports);
  //header row of row names + all rows showReports

  //each list entry
  for (const entry of showReportsNew) {
    let childRow = document.createElement("tr");

    // add header or data to the table
    for (const [key, value] of Object.entries(entry)) {
      let cell = document.createElement("td");
      cell.innerText = value;
      childRow.appendChild(cell);
    }
    table.appendChild(childRow);
  }

  console.log("table complete;");
}
