import { post } from "./api"

export function createBlock2(loc, startRow, endRow, price) {
    //venue data
    let show_name_block = document.getElementById("show_name_block")
    let locations = loc;

    // prepare payload for the post
    let data = { 
        'show_name_block': show_name_block.value,
        'price': price,
        'start_row': startRow,
        'end_row': endRow,
        // 'idsection': section, 
        'locations' : locations
    }

    const handler = (json) => {
        console.log(json)
        show_name_block.value = ''
        price = ''
        startRow  = ''
        endRow  = ''
        locations = ''

        // if (json.errorMessage){
        //     //do NOT redirect
        //     alert("Error: block not created:  " + json.errorMessage);
        // }     
    }

    post('/createBlock', data, handler)
  
}

// export function createBlock() {
//     //venue data
//     let showName = document.getElementById("showName")
//     let price = document.getElementById("price")
//     let startRow = document.getElementById("start_row")
//     let endRow = document.getElementById("end_row")

//     // prepare payload for the post
//     let data = { 
//         'showName': showName.value,
//         'price': price.value,
//         'start_row': startRow.value,
//         'end_row': endRow.value
//     }

//     const handler = (json) => {
//         console.log(json)
//         showName.value = ''
//         price.value = ''
//         startRow.value = ''
//         endRow.value = ''
//         location = ''
//     }

//     post('/createBlock', data, handler)
  
// }

export default createBlock2;