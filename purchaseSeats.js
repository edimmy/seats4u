import { post } from "./api"

export function purchaseSeats() {
    //seat data
    let idshow = document.getElementById("idshow")
    let idseat = document.getElementById("idseat")

    // prepare payload for the post
    let data = { 
        'idshow': idshow.value, 
        'idseat': idseat.value
    }

    const handler = (json) => {
        console.log(json)
        idshow.value = ''
        idseat.value = ''
    }

    post('/purchaseSeats', data, handler)
  
}