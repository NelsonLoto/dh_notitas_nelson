const express = require ('express')
const router = express.Router();

const indexController = require ('../controllers/indexController');

router.get('/', indexController.index)
router.post('/create',indexController.create)
router.delete('/:id', indexController.destroy)

module.exports = router;