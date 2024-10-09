const express = require("express");
const router = express.Router();
const  {fetchAllOgretmen,fetchByIdOgretmen,insertOgretmen,updateOgretmen,removeOgretmen} = require("../controllers/ogretmen");
const {newOgretmenValidation} = require("../validations/ogretmen");
const {validate} = require("../middlewares/validate");
router.route('/').get(fetchAllOgretmen);
router.route('/:ogretmen_id').get(fetchByIdOgretmen);
router.route('/').post(validate(newOgretmenValidation),insertOgretmen);
// router.route('/:id').put(updateOgretmen);
// router.route('/:id').delete(removeOgretmen);



  module.exports = router;