const router = require("express").Router();
let Uom = require('../models/uom.model')

router.route('/').get((req, res) => {
   Uom.find()
   .then(uoms =>  res.json(uoms))
   .catch(err => res.status(400).json("Error: "+ err) ) 
});

router.route('/:id').get((req, res) => {
    Uom.findById(req.params.id)
    .then(uom =>  res.json(uom))
    .catch(err => res.status(400).json("Error: "+ err) ) 
 });

router.route('/').post((req, res) => {
    const uom = req.body.uom;
    const newUom = new Uom({uom})

    newUom.save()
    .then(() =>  res.json("Uom added"))
    .catch(err => res.status(400).json("Error: "+ err) ) 
});


router.route('/:id').delete((req, res) => {
    Uom.findByIdAndDelete(req.params.id)
    .then(uom =>  res.json({msg : "uom delted"}))
    .catch(err => res.status(400).json("Error: "+ err) ) 
});

router.route('/:id').put((req, res) => {
    Uom.findById(req.params.id)
    .then(uom =>  {
        uom.uom = req.body.uom;

        uom.save()
        .then(() =>  res.json("Uom updated"))
        .catch(err => res.status(400).json("Error: "+ err) ) 
    })
    .catch(err => res.status(400).json("Error: "+ err) ) 
});

module.exports = router