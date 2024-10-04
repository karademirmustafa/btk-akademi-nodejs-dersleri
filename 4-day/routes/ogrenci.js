const express = require("express");
const router = express.Router();
const Ogrenci = require("../models/ogrenci");
const middleware = require("../middlewares/arayagiren");


router.route('/').post(middleware,async (req, res, next) => {
    const { adi, numarasi, telefon_numarasi } = req.body;
  
    const ogrenci = await Ogrenci.create({
      adi: adi,
      numarasi,
      telefon_numarasi,
    });
    return res.status(201).json(ogrenci);
  })

  router.route('/').get(middleware,async (req, res, next) => {
    const ogrenci = await Ogrenci.find();
    return res.status(200).json(ogrenci);
  })

  router.route('/:id').get(middleware,
    async (req, res, next) => {
        const { id } = req.params;
        const ogrenci = await Ogrenci.findById(id);
        return res.status(200).json(ogrenci);
      }
  )


  router.route('/:id').put(middleware, async (req, res, next) => {
    const { id } = req.params;
    const {adi,numarasi,telefon_numarasi} = req.body
  
    const ogrenci = await Ogrenci.findByIdAndUpdate(id,{
      adi: adi,
      numarasi,
      telefon_numarasi,
    },{new:true});
    return res.status(200).json(ogrenci);
  })

  router.route('/:id').delete(middleware,async (req, res, next) => {
    const { id } = req.params;
  
    const ogrenci = await Ogrenci.findByIdAndDelete(id);
    return res.status(200).json(ogrenci);
  })

  module.exports = router;