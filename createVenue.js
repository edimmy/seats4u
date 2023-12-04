import { post } from "./api"

export function createVenue() {
    //venue data
    let name = document.getElementById("name")
    let credential = document.getElementById("credential")
    //section data
    let location0 = "left"
    let num_rows0 = document.getElementById("num_rows0")
    let seats_in_row0 = document.getElementById("seats_in_row0")
    let location1 = "center"
    let num_rows1 = document.getElementById("num_rows1")
    let seats_in_row1 = document.getElementById("seats_in_row1")
    let location2 = "right"
    let num_rows2 = document.getElementById("num_rows2")
    let seats_in_row2 = document.getElementById("seats_in_row2")

    // prepare payload for the post
    let data = { 
        'name': name.value, 
        'credential': credential.value, 
        'location0': location0,
        'num_rows0': num_rows0.value, 
        'seats_in_row0': seats_in_row0.value,
        'location1': location1,
        'num_rows1': num_rows1.value, 
        'seats_in_row1': seats_in_row1.value,
        'location2': location2,
        'num_rows2': num_rows2.value, 
        'seats_in_row2': seats_in_row2.value
    }

    const handler = (json) => {
        console.log(json)
        name.value = ''
        credential.value = ''
        num_rows0.value = ''
        num_rows1.value = ''
        num_rows2.value = ''
        seats_in_row0.value = ''
        seats_in_row1.value = ''
        seats_in_row2.value = ''
               
    }

    post('/createVenue', data, handler)
  
}