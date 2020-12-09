const router = require("express").Router();
let Uom = require('../models/uom.model')

router.route('/').get((req, res) => {
   Uom.find()
   .then(uoms =>  res.json(uoms))
   .catch(err => res.status(400).json("Error: "+ err) ) 
});

router.route('/add').post((req, res) => {
    const uom = req.body.uom;
    const newUom = new Uom({uom})

    newUom.save()
    .then(() =>  res.json("Uom added"))
    .catch(err => res.status(400).json("Error: "+ err) ) 
 });

module.exports = router