import { get } from "./api"

export function showAvailableSeats() {
    // this sends the ACTUAL POST and retrieves the answer.
    get('/showReport')
        .then(function (response) {
            console.log(response.constants)
            let str = ''
            for (let report of response.constants) {
                // str += seats.num_rows0 + "  " + '<br>';

            }

            // insert HTML in the <div> with 
            // constant-list
            <div id='report-list'></div>
            let cd = document.getElementById('report-list')
            cd.innerHTML = str

        })
        .catch(function (error) {
            // not much to do
            console.log(error)
        })
    }