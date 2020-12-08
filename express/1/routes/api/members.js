const express = require('express');
const router = express.Router()
var members = require("../../data/members")
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
            )[0]
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

router.put('/updateMember/:id', (req, res) => {
    const found = members.some(
        member => 
            member.id == parseInt(req.params.id)
    );

    if (found) {
        const updateMember = req.body
        members.forEach(member => {
            if (member.id==parseInt(req.params.id)) {
                member.name = updateMember.name ? updateMember.name : member.name;
                member.email = updateMember.email ? updateMember.email : member.email;

                 res.json({
                     msg: "Member updated",
                     member:member
                 });
            }
        });
    } else {
        res.status(400).json({
            "msg": `Member Not Found with id of ${req.params.id}!`
        });
    }    
});


router.delete('/deleteMember/:id', (req, res) => {
    const found = members.some(
        member => 
            member.id == parseInt(req.params.id)
    );

    if (found) {
        members = members.filter(member => member.id!=parseInt(req.params.id))
        res.json({
            "msg": "Member deleted",
            "members": members
        });
    } else {
        res.status(400).json({
            "msg": `Member Not Found with id of ${req.params.id}!`
        });
    }
});

module.exports = router