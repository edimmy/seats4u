import { post } from "./api"

export function deleteShow() {
    //venue data
    let name = document.getElementById("deleteShowId")


    // prepare payload for the post
    let data = { 
        'deleteShowId': name.value 
    }

    const handler = (json) => {
        console.log(json)
        name.value = ''
    }

    post('/deleteShow', data, handler)
  
}