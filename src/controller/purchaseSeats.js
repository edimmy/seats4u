import { post } from "./api"

// export function purchaseSeats() {
//     //seat data

//     var successfulPurchase = true;
//     //event.preventDefault();
//     let idseat = document.getElementById("idseat")
//     //let idseat = document.getElementById("idseat")

//     // prepare payload for the post
//     let data = { 
//         'idseat': idseat.value 
//         //'idseat': idseat.value
//     }

//     const handler = (json) => {
//         //json.preventDefault();
//         console.log(json)
//         idseat.value = ''

//     }

//     post('/purchaseSeats', data, handler)
  
// }

export function purchaseSeats2(idseat) {
    //let idseat = document.getElementById("idseat")
    //let idseat = document.getElementById("idseat")

    var successfulPurchase = true;

    // prepare payload for the post
    let data = { 
        'idseat': idseat
        //'idseat': idseat.value
    }

    const handler = (json) => {
        //json.preventDefault();
        console.log(json)
        idseat = ''
        //idseat.value = ''
        if(json.Error){
            alert(json.Error);
            successfulPurchase = false;
        }
        
    }

    post('/purchaseSeats', data, handler)

    return successfulPurchase;
  
}