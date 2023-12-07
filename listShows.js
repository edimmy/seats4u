import { post } from "./api"

export function getShows() {
    //venue data
    let credential = document.getElementById("passwordListShows")

    // prepare payload for the post
    let data = { 
        'passwordListVenues': credential.value
    }

    const handler = (json) => {
        console.log(json)
        credential.value = ''
        document.getElementById("result").value = json.body
    }

    post('/listShows', data, handler)
  
}



// import { get } from "./api"

// export function getShows() {
//     // this sends the ACTUAL POST and retrieves the answer.
//     get('/listShows')
//         .then(function (response) {
//             console.log(response.constants)
//             let str = ''
//             for (let show of response.constants) {
//                 str += show.idshow + "  " + show.show_name + " " + show.datetime + " " + show.price_type + "  " + show.is_active + '<br>';
//             }

//             // insert HTML in the <div> with 
//             // constant-list
//             <div id='show-list'></div>
//             let cd = document.getElementById('show-list')
//             cd.innerHTML = str

//         })
//         .catch(function (error) {
//             // not much to do
//             console.log(error)
//         })
//     }
