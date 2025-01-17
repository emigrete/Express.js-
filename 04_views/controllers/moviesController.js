let moviesController = {
    index: function(req, res){
        return res.render('movies', { title: 'Movies' });
    },
    show: function(req, res){
        return res.send(`Estamos en el detalle de la película: ${req.params.id}`)
    },
    create: function(req, res){
        return res.send("Estamos en el formulario de carga de películas")
    }

}


module.exports = moviesController