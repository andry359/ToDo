const Movie = require('./models/movie');
const Categories = require('./models/category');

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Не получилось вынести запросы
app.get('/', (req, res) => {
    res.send('Hello World!123')
})
app.post('/movies', async (req, res) => {
    try {
        Movie.create({
            title: req.body.title,
            category: req.body.category,
            year: req.body.year,
            duration: req.body.duration,
            director: req.body.director,
            rating: req.body.rating,
        })
        return res.status(201).send('movie created');
    } catch (err) {
        return res.status(500).send(`ERROR - ${err}`);
    }

});
app.post('/categories', async (req, res) => {
    try {
        Categories.create({
            title: req.body.title
        })
        return res.status(201).send('categories created');
    } catch (err) {
        return res.status(500).send(`ERROR - ${err}`);
    }

});

app.get('/movies', (req, res) => {
    res.send(req.body)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})