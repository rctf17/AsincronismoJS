let xmlHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let api='https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback){
    let xhttp= new xmlHttpRequest();
    xhttp.open('GET', url_api,true);
    xhttp.onreadystatechange = function(event){
        if(xhttp.readyState===4){ //ha sido completado
            if(xhttp.status===200){ //saber el status
                callback(null,JSON.parse(xhttp.responseText));
            }
            else{
                const error= new Error ('Error' + url_api);
                return callback(error,null); 
            }
        }
    }
    xhttp.send();
}


//primer personaje
fetchData(api, function(error1, data1){
    if(error1){
        return console.error(error1);
    }else{
        fetchData(api + data1.results[0].id, function(error2,data2){  // Traer el primer personaje
            if(error2) {
                return console.error(error2);
            }
            else{
                fetchData(data2.origin.url, function(error3, data3){ //Traer el origen del personaje
                    if(error3){
                        return console.error(error3);
                    }else{
                        console.log(data1.info.count); //Cantidad de personajes
                        console.log(data2.name); //Nombre del primer personaje
                        console.log(data3.dimension); //a cual dimension pertenece
                    }
                });
            }
        });
    }
});
