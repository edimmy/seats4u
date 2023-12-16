import { post } from "./api"

export function createShow(navigate) {
    //let venue_name = document.getElementById("venue_name")
    let show_name = document.getElementById("show_name")
    let datetime = document.getElementById("datetime")
    let seat_price = document.getElementById("seat_price")
    let credential = document.getElementById("credential")

    let is_active = 0
    let is_sold_out = 0

    // prepare payload for the post
    let data = { 
        //'venue_name': venue_name.value, 
        'show_name': show_name.value, 
        'is_active': is_active,
        'datetime': datetime.value,
        'is_sold_out': is_sold_out,
        'seat_price' : seat_price.value,
        'credential' : credential.value }

    
    const handler = (json) => {
        console.log(json)
        // clear inputs
        //venue_name.value = ''
        show_name.value = ''
        datetime.value = ''
        seat_price.value = ''
        credential.value = ''
        if (json.statusCode == 200){
            navigate('/vmCreateBlock')
        }
        else{console.log("error in createShow")}
    }

    post('/createShow', data, handler)
  
}

export default createShow;