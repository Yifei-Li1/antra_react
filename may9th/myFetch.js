function myFetch(method,url,body){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.responseType = 'json';
        if (body !== undefined) {
            xhr.setRequestHeader('Content-Type', 'application/json');
        }
        xhr.onload = ()=>{
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.response);
                    
            }
            else{
                reject(xhr.response);
                    
            }
        };
        xhr.onerror=()=>{
            reject("Error");
        };  
        if(method === "POST" || method === "PUT"){
            xhr.send(JSON.stringify(body));
        }
        else{
            xhr.send();
        }
        
        
    })
}

myFetch('POST', 'https://reqres.in/api/register', {
    email: 'eve.holt@reqres.in',
    password: 'pistol'
})
.then(responseData => {
    console.log("Post: "+responseData);
})
.catch(err => {
    console.log(err);
});
myFetch('GET',"https://jsonplaceholder.typicode.com/todos/1")
.then(responseData => {
    console.log("Get: "+responseData);

});
myFetch('PUT', 'https://reqres.in/api/users/2',{
        "name": "morpheus",
        "job": "zion resident" 
})
.then(responseData => {
    console.log("Put"+responseData);
  })
.catch(err => {
    console.log(err);
});;
myFetch("DELETE",'https://jsonplaceholder.typicode.com/posts/1', {
    
})
.then((data) => {
    console.log('delete: '+data);
})