import { get } from "./api"

export function showAvailableSeats() {
    // this sends the ACTUAL POST and retrieves the answer.
    get('/showAvailableSeats')
        .then(function (response) {
            console.log(response.constants)
            let str = ''
            for (let seat of response.constants) {
                str += seat.idseat + '<br>'
            }

            // insert HTML in the <div> with 
            // constant-list
            <div id='seat-list'></div>
            let cd = document.getElementById('seat-list')
            cd.innerHTML = str

        })
        .catch(function (error) {
            // not much to do
            console.log(error)
        })
    }