const db = require("../database/models");

let indexController = {
    index: function(req, res){
        db.Note.findAll()
        .then(function(notas){
            return res.render('index', {notas:notas})
        })
    },
    create: function(req, res){
        //db.Note.create({
        //    title: req.body.title,
        //    text: req.body.text
        //})
        //.then(function(){
        //    res.redirect('/')
        //})
        res.send(req.body)
    },
    destroy: function(req, res){
        db.Note.destroy({
            where: {
                id_note: req.params.id
            }
        })
        .then(function(){
            res.redirect('/')
        })
    }
}

module.exports = indexController;