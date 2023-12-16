import { post } from "./api"

export function getShows() {
    //venue data
    let credential = document.getElementById("passwordListShows");

    // prepare payload for the post
    let data = { 
        'passwordListShows': credential.value
    }

    const handler = (json) => {
        console.log(json)
        credential.value = ''
        let response = json.body
        document.getElementById("all_constants").textContent = response
    }

    post('/listShows', data, handler)

}
