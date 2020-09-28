const express = require('express');
const router = express.Router();
const myData = require('../data');

router.get('/', (req, res) => {
    res.render('index', { myData });
});

router.get('/aboutme', (req, res) => {
    res.render('aboutme', { myData });
});

router.get('/education', (req, res) => {
    res.render('education', { myData })
});

router.get('/work', (req, res) => {
    res.render('work', { myData })
});

router.get('/skill', (req, res) => {
    res.render('skill', { myData })
});

module.exports = router;