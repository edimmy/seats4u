import { post } from "./api"

export function deleteVenue() {
    //venue data
    //let name = document.getElementById("name")
    let deleteName = document.getElementById("name")
    let credential = document.getElementById("credential")


    // prepare payload for the post
    let data = { 
        'deleteName': deleteName.value, 
        'credential': credential.value
    }

    const handler = (json) => {
        console.log("submitted venue for deletion:",json)
        deleteName.value = ''
        credential.value = ''
    }

    post('/deleteVenue', data, handler)
  
}