const express = require('express');
const router = express.Router()
const members = require("../../data/members")
const uuid = require('uuid')

router.get('/', (req, res) => {
    res.json(members);
});

router.get('/:id', (req, res) => {
    const found = members.some(
        member => 
            member.id == parseInt(req.params.id)
    );

    if (found) {
        res.json(
            members.filter(member =>
                member.id == parseInt(req.params.id)
            )
        );
    } else {
        res.status(400).json({
            "msg": `Member Not Found with id of ${req.params.id}!`
        });
    }
});

router.post('/addMember', (req, res) => {
    // res.send(req.body);
    const member = {
        id : uuid.v4(),
        name : req.body.name,
        email : req.body.email
    }

    if ( !member.name || !member.email) {
        return res.status(400).json({
            msg: "please include name and email"
        });
    } 

    members.push(member)
    res.json(members);
});

module.exports = router