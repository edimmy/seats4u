import { get } from "./api"

export function showReports() {
    // this sends the ACTUAL POST and retrieves the answer.
    let shows = []
    let showNames = []
    get('/listShows')
        .then(function (response) {
            console.log(response.constants)
            for (let show of response.constants) {
                shows[show] = show.showID
                showNames[show] = show.name
            }
        })
        .catch(function (error) {
            // not much to do
            console.log(error)
        })


    get('/showReports')
        .then(function (response) {
            console.log(response.constants)
            let str = ''
            for (let show in shows){
                let active = null
                let numSeats = 0
                let availableSeats = 0
                let showSales = 0

                active = show.isActive
                if (show.isActive){
                for (let seat of response.constants) {
                    if (seat.showID === show){
                        numSeats += 1
                        availableSeats += seat.isActive
                        //handle sales
                    }
                }
                }
                str += show.show_name + ' | Seats available: ' + availableSeats + ' (out of ' + numSeats + ' ) | Sales: $' + showSales + '<br>'
            }


            // insert HTML in the <div> with 
            // constant-list
            <div id='show-report'></div>
            let cd = document.getElementById('show-report')
            cd.innerHTML = str

        })
        .catch(function (error) {
            // not much to do
            console.log(error)
        })
    }