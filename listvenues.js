import { post } from "./api"

export function getVenues() {
    //venue data
    let credential = document.getElementById("passwordListVenues")


    // prepare payload for the post
    let data = { 
        'passwordListVenues': credential.value
    }

    const handler = (json) => {
        console.log(json)
        credential.value = ''
        document.getElementById("result").value = json.body

    }

    post('/listVenues', data, handler)
  
}


// import { get } from "./api"

// export function getVenues() {
//     // this sends the ACTUAL POST and retrieves the answer.
//     get('/listVenues')
//         .then(function (response) {
//             console.log(response.constants)
//             let str = ''
//             for (let venue of response.constants) {
//                 str += venue.name + " " + venue.right + " " + venue.rnum_rows + " " + venue.rseats_in_row + " " +
//                 venue.center + " " + venue.cnum_rows + " " + venue.cseats_in_row + " " +
//                 venue.lenter + " " + venue.lnum_rows + " " + venue.lseats_in_row + '<br>';

//             }

//             // insert HTML in the <div> with 
//             // constant-list
//             <div id='venue-list'></div>
//             let cd = document.getElementById('venue-list')
//             cd.innerHTML = str

//         })
//         .catch(function (error) {
//             // not much to do
//             console.log(error)
//         })
//     }
