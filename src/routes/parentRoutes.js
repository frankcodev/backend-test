const router = require("express").Router();
const { checkToken } = require('../controllers/authMiddlewares')
const parentController = require('../controllers/parentController')


router.get('/', checkToken, parentController.getParents);
router.post('/', checkToken, parentController.createParent);

module.exports = router;