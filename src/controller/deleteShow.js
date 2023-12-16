import { post } from "./api"

export function deleteShow() {
    //venue data
    let deleteName = document.getElementById("delete_Name");
    console.log("deleting", deleteName);

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


export function deleteShowAdmin() {
    //venue data
    let delete_Name_Admin = document.getElementById("delete_Name_Admin");
    console.log("delete_Name_Admin", delete_Name_Admin);

    // prepare payload for the post
    let data = { 
        'delete_Name_Admin': delete_Name_Admin.value
    }

    const handler = (json) => {
        console.log(json)
        delete_Name_Admin.value = ''
    }

    post('/deleteShowAdmin', data, handler)
  
}
