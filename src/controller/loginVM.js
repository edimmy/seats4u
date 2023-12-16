import { post } from "./api"


export function loginVM(navigate) {

    let credential = document.getElementById("passwordField")
    let data = {
        'passwordField': credential.value
    }


    const handler = (json) => {
        var result = credential.value;
        var isValid = json.constants;
        console.log("login result", result)    
        credential.value = ''

        if(isValid == 1){
          navigate('/vmMainScreen');
        } else {
            console.log("NOTHING")

        }
    }

   // return post('/venueManagerLogin', data, handler).then((result => {return result}))
    post('/venueManagerLogin', data, handler)

   

}