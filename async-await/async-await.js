//Case-1

async function getData(){
    return "Data Received";


}

//console.log(getData()); it return promise

getData().then(data=>{
    console.log(data)
})

// case -2

const promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Data Received");
    }, 3000);
});

async function getData1(){
    let response = await promise;
    console.log(response)
}
/////////////////////////////////////////////////////////////////////////////////////
// EX-01 With Promise
let result1 = document.getElementById('result1');

let dell={
    brand:"Dell",
    harDisk:"2 TB",
    color:"Black"
}

let buyLaptop2 = fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>response.json())


let buyLaptop = new Promise((resolve, reject)=>{
    setTimeout(()=>{
    resolve(dell)
    //reject("")
    },3000)
})

function fetch1(){
result1.innerText="Fetching Data....";
buyLaptop.then(res=>{
    console.log(res)
    result1.innerText=JSON.stringify(res);
}).catch(res=>{
    console.log(res)
    result1.innerText="Not Found Any Laptop";
})
}

// EX-02 With Async Await


let result2 = document.getElementById('result2');
async function fetch2(){
result2.innerText="Fetching Data....";
let data = await buyLaptop;
console.log(data);
result2.innerText=JSON.stringify(data);
}

// EX-03 With Fetch Api

// with promise
// let result3 = document.getElementById('result3');
// function fetch3(){
// result3.innerText="Fetching Data....";
// buyLaptop2.then(res=>{
//     console.log(res)
// result3.innerText=JSON.stringify(res);
// })
// }

// with async await
let result3 = document.getElementById('result3');
async function fetch3(){
result3.innerText="Fetching Data....";
let res = await buyLaptop2;
console.log(res)
result3.innerText=JSON.stringify(res);
}