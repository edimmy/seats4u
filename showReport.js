import { get } from "./api"

export function showReport() {
    // this sends the ACTUAL POST and retrieves the answer.
    get('/showReport')
        .then(function (response) {
            console.log(response.constants) 

            let str = ''

            for (let report of response.constants) {
         
                str += report.ShowName + ":  Seats Sold " + report.SeatsSold + ":  Seats Not Sold " + report.SeatsNotSold + ":  Proceeds " + report.Proceeds + "<br>"
            }

          
            // insert HTML in the <div> with 
            // constant-list
            <div id='showreport'></div>
            let cd = document.getElementById("showreport")
            cd.innerHTML = str

        })
        .catch(function (error) {
            // not much to do
            console.log(error)
        })}
