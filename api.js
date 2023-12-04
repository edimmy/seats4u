const url = 'https://d9uiibfgvj.execute-api.us-east-1.amazonaws.com/Seats4U'

// Assume resource always starts with a "/"
function api(resource) {
    return url + resource
}

export async function post(resource, data, handler) {
    fetch(api(resource), {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(data)   // Stringify into string for request
    })
    .then((response) => response.json())
    .then((responseJson) => handler(responseJson))
    .catch((err) => handler(err))
}


// resource is a string like "/constants"
export async function get(resource) {
    const response = await fetch(api(resource), {
        method: "GET"
    })

    return response.json()    // extract as native JavaScript object
}