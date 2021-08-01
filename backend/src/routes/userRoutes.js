const router = require('express').Router();

router.post('/', (req, res) => {
  res.send('create user route');
});

module.exports = router;
