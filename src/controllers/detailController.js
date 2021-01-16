const db = require("../database/models");

let detailController = {
    detail: function(req, res){
        db.Note.findByPk(req.params.id)
        .then(function(resultado){
            res.render('detail', {nota:resultado})
        })
    },
    editSave: function(req,res){
        db.Note.update({
            id_note: req.params.id,
            title: req.body.title,
            text: req.body.message
        },{
            where: {
                id: req.params.id
            }
        }).then(function(){
            res.redirect('/')
        })
    }
}

module.exports = detailController;