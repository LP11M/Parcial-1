var Project = require('../models/project');

var controller = {
    home: function(req, res) {
        return res.status(200).send({
            message: "Soy la home"
        });
    },
    test: function(req, res) {
        return res.status(200).send({
            message: "Soy test del controlador project"
        });
    },
    saveProject: function(req, res) {
        let project = new Project()
        let params = req.body
        console.log(params)

    
        project.name=params.name
        project.description=params.description
        project.category=params.category
        project.year=params.year
        project.langs=params.langs
        console.log("Saving...")

        project.save()
            .then(projectStored => {
                if (!projectStored) {
                    return res.status(404).send({
                        message: 'No se ha podido guardar el proyecto.'
                    });
                }
                res.status(200).send({project: projectStored});
            })
            .catch(err => {
                res.status(500).send({
                    message: 'Error al guardar documento' + err
                });
            });
    },
    getProject:function(req,res){
        var projectID = req.params.id;
        if(projectId==null) return res.status(404).send({message: 'El proyecto no existe'});
        Project.findById(projectID,(err,project)=> {
            if(err) return res.status(500).send({message: 'Error al devolver los datos.'});
            if(!project) return res.status(404).send({message: 'El proyecto no existe'});
            return res.status(200).send({
                project
            });
        })
    },
    getProjects: function(req,res){
        Project.find({}.sort('-year').exec((err, projects)=>{
            if(err) return res.status(500).send({message: 'Error al devolver los datos.'});
            if(!projects) return res.status(404).send({message: 'No hay proyectos que mostrar'});
            return res.status(200).send({
                projects
            });
        }))
    },
    updateProject: function(req,res){
        var projectID = req.params.id;
        var update = req.boy;
        Project.findByIdAndUpdate(projectId, update, {new:true},(err, projectUpdated)=>{
            if(err) return res.status(500).send({message: 'Error al actualizar.'});
            if(!projectUpdated) return res.status(404).send({message: 'No hay proyectos para actualizar'});
            return res.status(200).send({
                project: projectUpdated
            });
        });
    
    },
    deleteProject:function(req,res){
        var projectID = req.params.id;
        Project.findByIdAndRemove(projectId,(err, projectRemoved)=>{
            if(err) return res.status(500).send({message: 'No se ha podido remover.'});
            if(!projectUpdated) return res.status(404).send({message: 'No hay proyectos para eliminar'});
            return res.status(200).send({
                project: projectRemoved
            });
        });
    }
};

module.exports = controller;