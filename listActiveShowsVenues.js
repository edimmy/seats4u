import { get } from "./api"

export function getActiveShowsVenues() {
    // this sends the ACTUAL POST and retrieves the answer.
    get('/listActiveShowsVenues')
        .then(function (response) {
            console.log(response.constants)
            let str = ''
            for (let show of response.constants) {
                str += show.show_name + '<br>'
            }

            // insert HTML in the <div> with 
            // constant-list
            <div id='show-active-list'></div>
            let cd = document.getElementById('show-active-list')
            cd.innerHTML = str

        })
        .catch(function (error) {
            // not much to do
            console.log(error)
        })
    }
