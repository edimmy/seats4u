import { get } from "./api"

export function getShows() {
    // this sends the ACTUAL POST and retrieves the answer.
    get('/listShows')
        .then(function (response) {
            console.log(response.constants)
            let str = ''
            for (let show of response.constants) {
                str += show.show_name + '<br>'
            }

            // insert HTML in the <div> with 
            // constant-list
            <div id='show-list'></div>
            let cd = document.getElementById('show-list')
            cd.innerHTML = str

        })
        .catch(function (error) {
            // not much to do
            console.log(error)
        })
    }