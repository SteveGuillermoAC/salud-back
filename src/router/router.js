const persona = require('../controller/personaController');

const {Router} = require('express')
const router = Router();

router.use('./Persona',persona);

module.exports = router;

