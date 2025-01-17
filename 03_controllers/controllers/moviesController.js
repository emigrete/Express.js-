let moviesController = {
    index: function(req, res){
        return res.send(`Hola. Estamos en la página ppal de películas`);
    },
    show: function(req, res){
        return res.send(`Estamos en el detalle de la película: ${req.params.id}`)
    },
    create: function(req, res){
        return res.send("Estamos en el formulario de carga de películas")
    }

}


module.exports = moviesController