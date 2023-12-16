import { post } from "./api"

export function deleteVenue() {
    //venue data
    let name = document.getElementById("name")
    let credential = document.getElementById("credential")


    // prepare payload for the post
    let data = { 
        'name': name.value, 
        'credential': credential.value
    }

    const handler = (json) => {
        console.log(json)
        name.value = ''
        credential.value = ''
    }

    post('/deleteVenue', data, handler)
  
}


