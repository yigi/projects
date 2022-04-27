const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Post = require('../models/posts');


router.get('/', (req, res) => 
  Post.findAll()
    .then(posts => console.log(posts))
    .catch(err => res.render('error', {error: err})));

router.get('/add', (req, res) => res.render('add'));

router.post('/add', (req, res) => {
    let { title, technologies, budget, description, contact_email } = req.body;
    let errors = [];
  
    // Validate Fields
    if(!title) {
      errors.push({ text: 'Please add a title' });
    }
    if(!technologies) {
      errors.push({ text: 'Please add some technologies' });
    }
    if(!description) {
      errors.push({ text: 'Please add a description' });
    }
    if(!contact_email) {
      errors.push({ text: 'Please add a contact email' });
    }
  
    // Check for errors
    if(errors.length > 0) {
      res.render('add', {
        errors,
        title, 
        technologies, 
        budget, 
        description, 
        contact_email
      });
    } else {
      if(!budget) {
        budget = 'Unknown';
      } else {
        budget = `$${budget}`;
      }
  
      technologies = technologies.toLowerCase().replace(/,[ ]+/g, ',');
  
      // Insert into table
      Post.create({
        title,
        technologies,
        description,
        budget,
        contact_email
      })
        .then(post => res.redirect('/posts'))
        .catch(err => res.render('error', {error:err.message}))
    }
});

router.get('/search', (req, res) => {
    let { term } = req.query;
  
    term = term.toLowerCase();
  
    Post.findAll({ where: { technologies: { [Op.like]: '%' + term + '%' } } })
      .then(posts => res.render('posts', { posts }))
      .catch(err => res.render('error', {error: err}));
  });

module.exports = router;