const express = require('express');

const app = express();

app.get('/', (req,res)=>res.send("<h1>Updating Port 5000!</h1>"));

app.listen(5000);
console.log('Sever on port 5000 =)');