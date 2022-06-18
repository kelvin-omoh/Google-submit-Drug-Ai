            //-----building a REST-API--------\\


//rest-- is representational state transfer
//CRUD operation--create, Read,Update ,Delete.

//Standard http methods  are GET,POST,PUT,DELETE

//to upadte use PUT
//to create use POST




//---------making a first web server with  express---\\
const { query } = require("express");
const express =require("express");
//EXPRESS GIVE THE CODE A SKELETON

const app = express();
app.use(express.json())
//we are using get request
app.get('/',(req,res)=>{
    res.send('hello worljjd')
})
app.get("/omoh",(req,res)=>{
    res.send(JSON.stringify([1,2,3,"KELVIN IS THE BEST","2W",2762727]))
})
//for parameters

//params for route
app.get('/api/post/:year/:month',(req,res)=>{
 res.send(req.params) 
})   
app.get('/aken/:name/:title',(req,res)=>{
    res.send(req.params);
})
//params for query - its used for providing extra data to the back end
// its used for things that are optional
app.get('/api/posts/:year/:month',(req,res)=>{
   res.send(req.query);
    
}) 
app.get('/me/:name/:school',(req,res)=>{
    res.send(req.query);
})
app.get('/js/12/:me',(req,res)=>{
    res.send(req.query)
})








//handling a get request <==  to get a cousre from the server




const courses = [
    {id: 1, name:'course1'},
    {id: 2, name:'course2'},
    {id: 3, name:'course 3'}
]


app.get('/api/courses',(req,res)=>{
    res.send(courses);//this is to get all the couses
});







//making a post request
//handling a post request
app.post('/api/courses',(req,res)=>{
    const course={
        id:courses.length+1,
        name:req.body.name
    }
    courses.push(course);
    res.send(course)
})







// app.get('/api/courses/:id',(req,res)=>{//this is to get a single course
//   const course =  courses.find(c =>c.id === parseInt(req.params.id))
//        if(!course)  res.status(404).send("this courses dosent exist....");
//            res.send(course);
// });
 
// //hnadling a get request to get a friend from the server
// const friends =[

//     {friend:"omoh",id:1},
//     {friend:"odion",id:2},
//     {friend:"tola",id:3}
// ]


// app.get('/friend',(req,res)=>{
//     res.send(friends);
// });
// app.get('/friend/:id',(req,res)=>{
//     const friend=friends.find(F => F.id === parseInt(req.params.id))
//     if(!friend)res.status(404).send("my guys dont exists here");
//     res.send(friend);
// })


// //handling a get request to get CSC,s form the server without int
// const cscs=[
//     {csc:"csc202",teacher:"baba"},
//     {csc:"csc208",teacher:"mustache"},
//     {csc:"csc206",teacher:"woman"}
// ]
// app.get('/cscs',(req,res)=>{
//     res.send(cscs);
// })
// app.get('/cscs/:teacher',(req,res)=>{
//     const csc = cscs.find( C=> C.teacher === (req.params.teacher));
//     if(!csc)res.status(404).send("csc doesnt exist here")
//     res.send(csc)
// })
// const me =[
//    { dog:"me1",things:"ball"},
//    { dog:"me",things:"badll"},
//    { dog:"me3",things:"baq1ll"},
// ]
// app.get('/kooo/',(req,res)=>{
//     res.send(me);
// })
// //for things
// app.get("/kooo/:things",(req,res)=>{
//     const thing= me.find( c=> c.things === (req.params.things));
//     if(!thing) res.status(404).send("invalid thing return back ");
//     res.send(thing);
// });
// //for dog
//  app.get('/kooo/dog',(req,res)=>{
//      res.send(me);
//  })
//  app.get('/kooo/dog/:dog',(req,res)=>{
//      const dog=me.find(c=> c.dog ===(req.params.dog));
//      if(!dog)res.status(404).send("error come back see your dog");
//      res.send(dog);
//  })














//envoironmental viariable is called PORT
//use process to read PoRT
const port =process.env.PORT || 3000;
app.listen(port,()=>
    console.log(`listening on port ${port} `));

    