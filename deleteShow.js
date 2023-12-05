import { post } from "./api"

export function deleteShow() {
    //venue data
    let deleteName = document.getElementById("delete_Name")

    // prepare payload for the post
    let data = { 
        'delete_Name': deleteName.value 
    }

    const handler = (json) => {
        console.log(json)
        deleteName.value = ''
    }

    post('/deleteShow', data, handler)
  
}
