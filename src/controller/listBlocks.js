import { post } from "./api"

export function listBlocks() {
    //show name data
    let showname = document.getElementById("showname")

    // prepare payload for the post
    let data = { 
        'showname': showname.value
    }

    const handler = (json) => {
        console.log(json)
        showname.value = ''
        let response = json.body
        //document.getElementById('blocksInShow').textContent = response //old

        updatePageWithResults(JSON.parse(json.body)); 
    }

    post('/listBlocks', data, handler)
  
}

export function updatePageWithResults(jsonBody){
    if(jsonBody === "[]" || jsonBody == null ){return;}
    let resultSection = document.getElementById("resultBlock");

    var list = '<ul>';
    for (var item in jsonBody){
        // list += blockResponseItem(jsonBody[item].show_name, jsonBody[item].is_sold_out );
        list += blockResponseItem(
            jsonBody[item][ 'Block ID' ],
            jsonBody[item][ 'Section' ],
            jsonBody[item][ 'Starting Row' ],
            jsonBody[item][ 'Ending Row' ],
            jsonBody[item][ 'Price of Block' ],
            jsonBody[item][ 'Number of Seats Left in Block' ],
            jsonBody[item][ 'Number of Seats Sold in Block' ]);
    }
    // list += generateResponseItem(jsonBody);
    list += '</ul>';
    resultSection.innerHTML = list;
}

function blockResponseItem(block_id, section, start_row, end_row,
     price, num_seats_left, num_seats_sold ) {
    return  '<br>' +'<li>' + "BlockID: "  + block_id + 
    " Section: " + section + 
    " Start Row: " + start_row +
    " End Row: " + end_row +
    " Price: " + price +
    " Seats Remaining: " + num_seats_left +
    " Seats Sold: "+  num_seats_sold + '</li>' + '</br>'; }
