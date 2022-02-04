'use strict';

const express = require('express');
const fs = require('fs');
const path = require('path');
const pretty = require('express-prettify');

const app = express();
const port = 3000;
app.set('view engine', 'pug');
app.use(pretty({ query: 'pretty' }));

const raw = fs.readFileSync(path.join(__dirname + '/sources/portfolio.json'));
const portfolio = JSON.parse(raw);

app.get('/', (req, res) => {
  res.render(path.join(__dirname + '/sources/portfolio'), {
    about: portfolio.about,
    contact: portfolio.contact,
    links: portfolio.links,
    education: portfolio.education,
    certificates: portfolio.certificates,
    skills: portfolio.skills,
    languages: portfolio.languages,
    projects: portfolio.projects,
    employment: portfolio.employment,
    resume: portfolio.resume
  });
});

app.get('/json', (req, res) => {
  res.json(portfolio);
});

app.listen(port, () => {
  console.log(`-- App listening on port - ${port} --`);
});
