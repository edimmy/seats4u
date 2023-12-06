import { get } from "./api"

export function getVenues() {
    // this sends the ACTUAL POST and retrieves the answer.
    get('/listVenues')
        .then(function (response) {
            console.log(response.constants)
            let str = ''
            for (let venue of response.constants) {
                str += venue.name + '<br>'
                // str += venue.name + ' <button type="button"> View </button> <br>'
            }

            // insert HTML in the <div> with 
            // constant-list
            <div id='venue-list'></div>
            let cd = document.getElementById('venue-list')
            cd.innerHTML = str

        })
        .catch(function (error) {
            // not much to do
            console.log(error)
        })
    }