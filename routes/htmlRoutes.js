const path = require('path');
const router = require('express').Router();

router.get('/notes', (reg, res) => {
    res.sendFile(path.join(__dirname, '../public/note.html'));
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index,html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;