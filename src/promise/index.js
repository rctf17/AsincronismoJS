const someThingWillHappen = () =>{
    return new Promise((resolve ,reject)=>{
        if(true){
            resolve('Hey!');
        }else{
            reject('Whoooops!');
        }
    });
};

someThingWillHappen()
.then(response => console.log(response))
.catch(err => console.error(err));


const someThingWillHappen2= () =>{
    return new Promise((resolve, reject)=>{
        if(true){
            setTimeout(() =>{
                resolve('True');
            },2000);
        }else{
            const error = new Error('Whooops!');
            reject(error);
        }
    });
}

someThingWillHappen2()
.then(response => console.log(response))
.catch(err => console.error(err)); 

Promise.all([someThingWillHappen(),someThingWillHappen2()]) //se corren dos promesas
.then (response => {
    console.log('Array of results', response)  //retorna un arreglo con los resultados con las respuestas de ambas
})
.catch(err =>{
    console.error(err);
})