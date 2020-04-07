const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req, res)=>{
    res.send(
        [
            {
              "id": 1,
              "name":"홍길동",
              "image":"http://placeimg.com/50/50/any",
              "birthday":"2010-09-04",
              "gender":"남",
              "job":"Developer"
            },
            {
              "id": 2,
              "name":"홍길순",
              "image":"http://placeimg.com/50/50/any",
              "birthday":"2010-09-04",
              "gender":"남",
              "job":"Developer"
            },
            {
              "id": 3,
              "name":"홍길남1",
              "image":"http://placeimg.com/50/50/any",
              "birthday":"2010-09-04",
              "gender":"남",
              "job":"Developer"
            },
            {
              "id": 4,
              "name":"홍길남2",
              "image":"http://placeimg.com/50/50/any",
              "birthday":"2010-09-04",
              "gender":"남",
              "job":"Developer"
            }
            ]
    );
});

app.get('/',(req, res) => {
    res.send('<h1>Hello</h1>');
});

app.listen(port, () => console.log(`Listening on port ${ port }`));