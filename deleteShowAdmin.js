import { post } from "./api"

export function deleteShowAdmin() {
    //venue data
    let deleteNameAdmin = document.getElementById("delete_Name_Admin")

    // prepare payload for the post
    let data = { 
        'delete_Name_Admin': deleteNameAdmin.value
    }

    const handler = (json) => {
        console.log(json)
        deleteNameAdmin.value = ''
    }

    post('/deleteShowAdmin', data, handler)
  
}
