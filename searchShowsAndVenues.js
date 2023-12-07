import { post } from "./api"

export function searchShowsAndVenues() {
    //venue data
    let search = document.getElementById("search")

    // prepare payload for the post
    let data = { 
        'search': '%' + search.value + '%' 
    }

    const handler = (json) => {
        console.log(json)
        search.value = ''
    }

    post('/searchShowsAndVenues', data, handler)

}