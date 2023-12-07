import { post } from "./api"

export function makeSeats(venue_name, showID){
    let data = { 
        'venuename': venue_name.value,
        'Idshow': showID.value
    }
    const handler = (json) => {
        console.log(json)
        venuename.value = ''
        Idshow.value = ''
    }

    post('/makeSeats', data, handler)
}