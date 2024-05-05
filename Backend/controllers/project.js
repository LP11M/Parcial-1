var Project= require('../models/project')
var controller = {
    home: function(req,res){
        return res.status(200).send({
            message: "Soy la home"
        });
    },
    test: function(req,res){
        return res.status(200).send({
            message: "Soy test del controlador project"
        });
    },
    saveProject: function(req,res){
        var project = new Project();

        var params =req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        project.save()
        .then(projectStored => {
            if (!projectStored) {
            return res.status(404).send({
                message: 'No se ha podido guardar el proyecto.'
            });
            }
            return res.status(200).send({
            project: projectStored
            });
        })
        .catch(err => {
            return res.status(500).send({
            message: 'Error al guardar documento'
            });
        });
        
    }
}

module.exports = controller;