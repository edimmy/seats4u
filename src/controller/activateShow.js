import { post } from "./api"

export function activateShow(navigate) {
    // let venue_name = document.getElementById("venue_name_activate")
    let show_name = document.getElementById("show_name_activate")
    let is_active = 1

    console.log(show_name);

    // prepare payload for the post
    let data = { 
        // 'venue_name': venue_name.value, 
        'show_name': show_name.value,
        'is_active': is_active 
     }

    
    const handler = (json) => {
        console.log(json)
        // clear inputs
        // venue_name.value = ''
        show_name.value = ''
        
        if(json.statusCode == 200){
            navigate('/vmMainScreen'); }
        if(json.Error){
            alert(json.Error)
        }
            
    }

    post('/activateShow', data, handler)
  
}
