import { post } from "./api"

export function activateShow() {
    let venue_name = document.getElementById("venue_name_activate")
    let show_name = document.getElementById("show_name_activate")
    let is_active = 1

    // prepare payload for the post
    let data = { 
        'venue_name': venue_name.value, 
        'show_name': show_name.value,
        'is_active': is_active 
     }

    
    const handler = (json) => {
        console.log(json)
        // clear inputs
        venue_name.value = ''
        show_name.value = ''
    }

    post('/activateShow', data, handler)
  
}
