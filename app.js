const express = require('express');

//express
const app = express();

//Listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    res.sendFile('/index.html',{root : __dirname});
});

app.get('/about', (req, res) => {
    res.sendFile('/about.html',{root : __dirname});
});

//redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

//404 page
app.use((req, res) => {
    res.statusCode(404).sendFile('/404.html',{root : __dirname});
})