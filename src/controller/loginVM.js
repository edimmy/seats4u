import { post, get } from "./api"


//TODO: return true if the credential string is valid
//need to do get request

export function loginVM(s){
        // this sends the ACTUAL POST and retrieves the answer.

        // let credential = document.getElementById("passwordField")
        let credential = s;
        let data = {
            'credential' : credential.value
        }

        const handler = (json) => {
            console.log(json)
            credential.value = ''
        }

        post('/venueManagerLogin', data, handler)
        .then(function (response) {
            console.log("response" + response.constants)
            return response.constants //true if valid, false if invalid
        })
        .catch(function (error) {
            // not much to do
            console.log(error)
        })
    }



// export function loginVM(credentialToCheck) {
//     //venue data
//     //let name = document.getElementById("name")
//     let deleteName = document.getElementById("name")
//     let credential = document.getElementById("credential") //.innerHTML?


//     // prepare payload for the post
//     let data = { 
//         'deleteName': deleteName.value, 
//         'credential': credential.value
//     }

//     const handler = (json) => {
//         console.log("submitted venue for deletion:",json)
//         deleteName.value = ''
//         credential.value = ''
//     }

//     post('/venueManagerLogin', data, handler)



  
// }