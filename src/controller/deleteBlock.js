import { post } from "./api"

export function deleteBlock() {
    //venue data
    let deleteBlock = document.getElementById("idblock")

    // prepare payload for the post
    let data = { 
        'idblock': deleteBlock.value
    }

    const handler = (json) => {
        console.log(json)
        deleteBlock.value = ''
        if(json.statusCode == 200){
        document.getElementById("resultDeleteBlock").innerText = "Block deleted"
        }
    }

    post('/deleteBlock', data, handler)
  
}