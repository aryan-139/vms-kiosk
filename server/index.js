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

//now we need to connect to the database
const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'password',
    database:'kiosk',
    insecureAuth : true
}
);

//the database is now connected, we will add a test data to the server and see if it is working


//the above line of code is used to insert data into the database
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


//API to insert the new check in data into the database

app.post('/newcheckin', (req, res) => {
    const checkInDetails = req.body;
  
    const sqlInsert = 'INSERT INTO vms (firstName, lastName, email, phone, company, purpose) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [
      checkInDetails.firstName,
      checkInDetails.lastName,
      checkInDetails.emailAddress,
      checkInDetails.phoneNumber,
      checkInDetails.companyName,
      checkInDetails.purpose,
    ];
  
    db.query(sqlInsert, values, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error inserting check-in data');
      } else {
        console.log('Check-in data inserted successfully');
        res.status(200).send('Check-in data inserted successfully');
      }
    });
  });



