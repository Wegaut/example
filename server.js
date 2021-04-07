const express = require('express');

const app = express();

app.get('/', (req,res)=>res.send("Hellow Word con express"));

app.listen(3000);
console.log('Sever on port 3000');