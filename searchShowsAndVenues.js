import { post } from "./api"

export function searchShowsAndVenues() {
    let search = document.getElementById("search")

    // prepare payload for the post
    let data = {
        'search': '%' + search.value + '%'
     }

    
    const handler = (json) => {
        console.log(json)
        // clear inputs
        search.value = ''
        let response = json.body
        document.getElementById("search_shows").textContent = response
    }

    post('/searchShowsAndVenues', data, handler)
  
}
