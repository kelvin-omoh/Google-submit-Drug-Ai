//server

// const http =require('http');

// const server =http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.write("hello world");
//         res.end();
//     }
// });
// //-----on ----,addeventlistner-----,emit all are the same

// //deleted values of the commented below
// //because its a low level
// //server.on('connection',(socket)=>{
// //console.log("new connection")


// server.listen(3000);

// console.log("listening on port 3000");


const http= require('http');
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("hello kelvin that is good")
    };
    res.end();
    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]))
        res.end();
    }
});

server.listen(3000);
console.log("sever listening on port 3000");
