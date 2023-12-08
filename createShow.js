import { post } from "./api"
import { makeSeats } from "./makeSeats"

export function createShow() {
    let venue_name = document.getElementById("venue_name")
    let show_name = document.getElementById("show_name")
    let datetime = document.getElementById("datetime")
    let price_type = document.getElementById("price_type")
    let credential = document.getElementById("passwordCreateShow")

    let is_active = 0
    let is_sold_out = 0

    // prepare payload for the post
    let data = { 
        'venue_name': venue_name.value, 
        'show_name': show_name.value, 
        'is_active': is_active,
        'datetime': datetime.value, 
        'price_type': price_type.value, 
        'is_sold_out': is_sold_out,
        'passwordCreateShow': credential.value 
    }

    
    const handler = (json) => {
        console.log(json)
        // clear inputs
        venue_name.value = ''
        show_name.value = ''
        datetime.value = ''
        price_type.value = ''
        credential.value = ''
    }

    

    post('/createShow', data, handler)
    
    //makeSeats(credential, showID) ?????
  
}
