const express=require('express');
const app=express();
const mysql=require('mysql');
const cors=require('cors');
const bodyParser=require('body-parser');


const PORT=3001;
//now the server is active on the port 3001
app.listen(PORT,()=>{
    console.log(`Server is up and going on ${PORT}`);
}
);

app.get('/',(req,res)=>{
    res.send("Hey, the VMS system is up and running");
}
);


