import { post } from "./api"

//new: passing in event
export function searchShowsAndVenues(event) {
    event.preventDefault(); //nrt

    let search = document.getElementById("search");

    //0 is a venue, anything else is a show
    var showOrVenueElement = 0;
    if(document.getElementById("showVenueToggle").innerText == "Searching by Show"){
        showOrVenueElement = 1;
    }
   
    // prepare payload for the post
    let data = { 
        'search': "%" + search.value + "%", 
        'showOrVenue' : showOrVenueElement //new
    }

    const handler = (json) => {
        console.log(json)
        search.value = ''
        // document.getElementById("result").value = json.body //old
        console.log("response from lambda func:", json.body);
        //document.getElementById("result").innerText = json.body //me 

        if(json.body === undefined || json.body === null ){
            return;
        }

        updatePageWithResults(JSON.parse(json.body)); //json.constants is an array of results
    }

    post('/searchShowsAndVenues', data, handler)

}

export function updatePageWithResults(jsonBody){
    if(jsonBody === "[]" || jsonBody == null ){return;}
    let resultSection = document.getElementById("result");

    var list = '<ul>';
    for (var item in jsonBody){
        list += generateResponseItem(jsonBody[item].show_name, jsonBody[item].is_sold_out );
    }
    // list += generateResponseItem(jsonBody);
    list += '</ul>';

    resultSection.innerHTML = list;
    //update state valiable in react and pass that to 
}

function generateResponseItem(show_name, is_sold_out) {
    if(is_sold_out == "Sold Out"){
        return '<li>' + show_name + ": " + is_sold_out + '</li>'
    }
    return '<li>' + show_name + ": " + is_sold_out + '</li>' + '<button> Show Available Seats </button>' 
 }
