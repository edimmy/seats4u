import { post } from "./api"

export function activateShow() {
    let show_name = document.getElementById("show_name_active")

    // prepare payload for the post
    let data = {
        'show_name_active': show_name.value
     }

    
    const handler = (json) => {
        console.log(json)
        // clear inputs
        show_name.value = ''
    }

    post('/activateShow', data, handler)
  
}
