const express = require('express');
const mongoose = require('mongoose');
const Article = require('./models/article');
const articleRouter = require('./routes/articles');
const app = express();

mongoose.connect('mongodb://localhost:27017/blog', { 
    useNewUrlParser: true,
    useUnifiedTopology: true });
    
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

app.get('/', (_, res) => {
    const articles = Article.find().sort({ createdAt: 'desc' });
    res.render('articles/index', { articles: articles} );
});

app.use('/articles', articleRouter);

app.listen(3000, () => {
console.log('Server is running on port 3000');
});