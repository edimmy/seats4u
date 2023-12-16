import { get } from "./api"

export function getVenues() {
    // this sends the ACTUAL POST and retrieves the answer.
    get('/listVenues')
        .then(function (response) {
            console.log(response.constants)
            let str = ''
            for (let venue of response.constants) {
                str += venue.name + '<br>'
            }

            let cd = document.getElementById('venue-list')
            cd.innerHTML = str

        })
        .catch(function (error) {
            console.log(error)
        })
    }