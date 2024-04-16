let result ={

    "tag": "",
    "free": true,
    "role": false,
    "user": "abhi.jit6190",
    "email": "abhi.jit6190@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
}

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("clicked")

    //loading spinner
    resultCont.innerHTML = `<img width="233" src="ripples.svg" alt="">`


    //API key
    let key = "ema_live_VdtBYxil0jZmWEYi1dfNTauup0BAts1ye9TSIQNW"


    //input value
    let email = document.getElementById("username").value

    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`

    //making request
    let res = await fetch(url)
    let result = await res.json()
    

    let str = '';
    for (let key of Object.keys(result)) {
    str = str + `<div>${key}: ${result[key]}</div>`;
}

console.log(str);

//result
resultCont.innerHTML = str
})





