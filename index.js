const express = require('express');
const app = express();

app.use(express.json())

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.get('/name', (req, res) => {
    res.status(200).send({
        name: 'Ngolu🎉',
        age: "20"
    })
})

//

app.post('/name/:id', (req, res) => {
     
    const {id} = req.params;
    const {logo} = req.body;

    if (!logo) {
        res.status(418).send({ message: 'add logo!'})
    }

    res.send({
        name: `🎉 add a ${logo} and ID of ${id}`
    });
});


// 
app.use((error, req, res, next) => {
    res.status(404).send(error.message);
    next();
  });

app.listen(3000);