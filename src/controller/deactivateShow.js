import { get } from "./api"

// export function deactivateShow(theShowName) {
//     // let venue_name = document.getElementById("venue_name_activate")
//     //let theShowName = document.getElementById("show_name_activate")
//     let is_active = 1

//     console.log(theShowName);

//     // prepare payload for the post
//     let data = { 
//         'theShowName': theShowName.value,
//      }

    
//     const handler = (json) => {
//         console.log(json)
//         // clear inputs
//         // venue_name.value = ''
//         theShowName.value = ''
//     }

//     post('/deactivateShow', data, handler)
  
// }

export function deactivateShow() {
    // this sends the ACTUAL POST and retrieves the answer.
    get('/deactivateShow')
        .then(function (response) {
            console.log(response.constants)
        })
        .catch(function (error) {
            // not much to do
            console.log(error)
        })
    }

    