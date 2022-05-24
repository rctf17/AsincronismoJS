let xmlHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) => {
    return new Promise ((resolve, reject) => {

    const xhttp= new xmlHttpRequest();
    xhttp.open('GET', url_api,true);
    xhttp.onreadystatechange = (() => {
        if(xhttp.readyState===4){ //ha sido completado
           (xhttp.status===200)
           ? resolve (JSON.parse(xhttp.responseText))
           : reject (new Error('Error ', url_api))
        }
    })
    xhttp.send();

    });
}

module.exports = fetchData;