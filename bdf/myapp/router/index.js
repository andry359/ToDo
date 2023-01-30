const Movie = require('../models/movie');
const Categories = require('../models/category');

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
        return res.status(201).send('movie created'); // возвращаем ответ 
    } catch (err) {
        return res.status(500).send(`ERROR - ${err}`); // возвращаем ответ с ошибкой
    }

});

app.post('/categories', async (req, res) => {
    try {
        Categories.create({
            title: req.body.title
        })
        return res.status(201).send('categories created'); // возвращаем ответ 
    } catch (err) {
        return res.status(500).send(`ERROR - ${err}`); // возвращаем ответ с ошибкой
    }

});

app.get('/', (req, res) => {
    res.send('Hello World!123')
})

app.get('/movies', (req, res) => {
    res.send(req.body)
})