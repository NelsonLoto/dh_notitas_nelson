const express = require ('express')
const router = express.Router();

const detailController = require ('../controllers/detailController');
const { route } = require('./main');

router.get('/:id', detailController.detail);
router.post('/:id', detailController.editSave);

module.exports = router;