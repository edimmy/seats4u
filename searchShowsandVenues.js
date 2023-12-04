import { post } from "./api"

export function searchShowsAndVenues() {
    let search = document.getElementById("search")
   
    // prepare payload for the post
    let data = { 
        'search':'%' + search.value + '%', 
         }

    
    const handler = (json) => {
        console.log(json)
        // clear inputs
        search.value = ''
       }

    post('/searchShowsAndVenues', data, handler)
  
}
