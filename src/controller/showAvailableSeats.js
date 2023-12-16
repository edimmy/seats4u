import { post } from "./api"

//new: passing in event
export function showAvailableSeats() {
    let sortBy = document.getElementById("sortBy"); //include this in payload

    let show = document.getElementById("Show_Name")

    // prepare payload for the post
    let data = { 
        'Show_Name': show.value, 
        'sortBy': sortBy.value 
        //put sortby here
    }

    const handler = (json) => {
        console.log("response: ", json)
        show.value = ''
        sortBy.value = ''
        let response = JSON.parse(json.body)
        //document.getElementById("all_Constants").textContent = response 
        updatePageWithResults(response)

    }

    post('/showAvailableSeats', data, handler)

}


export function updatePageWithResults(jsonBody){
    if(jsonBody === "[]" || jsonBody == null ){return;}
    let resultSection = document.getElementById("resultAvailable");

    var list = '<ul>';
    for (var item in jsonBody){
        list += generateResponseItem(
            jsonBody[item].idseat,
            jsonBody[item].location,
            jsonBody[item].seat_row,
            jsonBody[item].seat_num,
            jsonBody[item].price );
    }
    // list += generateResponseItem(jsonBody);
    list += '</ul>';

    resultSection.innerHTML = list;
    //update state valiable in react and pass that to 
}

function generateResponseItem(idseat, loc, seatRow, seatNum, price) {
    return '<li>' + " SeatID:   " + idseat +
     "   Location:   " + loc + 
     "   Row:   " + seatRow + 
     "   Column:   " + seatNum +
     "   Price:   " + price +  
     '</li>'; }

