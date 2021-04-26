const express = require('express');

const app = express();

app.get('/api/books', (req, res) => {
  const books = [
    { title: 'Wuthering Bites: The Vampire Returns' },
    { title: 'Great Gatsby' },
    { title: 'East of Eden' },
    { title: 'The Count of Monte Cristo' },
    { title: 'Hyperion' },
    { title: 'The Gunslinger' },
    { title: 'Beowulf' },
    { title: 'Unofficial Pokedex Guide Sixth Edition' },
    { title: 'Lord of the Rings' },
    { title: 'Eat Pray Love' },
  ];
  res.json(books);
});

module.exports = app;
