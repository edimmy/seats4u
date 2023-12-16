import { post } from "./api"

export function deleteVenue(navigate) {
    //venue data

    let delete_credential = document.getElementById("credential")


    // prepare payload for the post
    let data = { 
        // 'deleteName': deleteName.value, 
        'delete_credential': delete_credential.value
    }

    const handler = (json) => {
        console.log("submitted venue for deletion:",json)
        // deleteName.value = ''
        delete_credential.value = ''
        if(json.statusCode == 200){
            navigate("/")
        }
    }

    post('/deleteVenue', data, handler)
  
}