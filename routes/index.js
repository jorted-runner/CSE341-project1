const router = require('express').Router();

router.use('/', require('./swagger'))

router.get('/', (req, res) => {
    res.send('Hello World');
});

const contactsRouter = require('./contacts');
router.use('/contacts', contactsRouter);

module.exports = router;