import { get } from "./api"

export function showAvailableSeats() {
    // this sends the ACTUAL POST and retrieves the answer.
    get('/showAvailableSeats')
        .then(function (response) {
            console.log(response.constants)
            let str = ''
            for (let seats of response.constants) {
                // str += seats.num_rows0 + "  " + '<br>';

            }

            // insert HTML in the <div> with 
            // constant-list
            <div id='available-seat-list'></div>
            let cd = document.getElementById('available-seat-list')
            cd.innerHTML = str

        })
        .catch(function (error) {
            // not much to do
            console.log(error)
        })
    }