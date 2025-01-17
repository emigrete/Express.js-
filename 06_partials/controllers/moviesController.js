let moviesController = {
    index: function(req, res){
        let movieList = ['Rocky', 'Batman', 'Barbie', 'Iron Man'];
        return res.render('movies', { title: 'Movies', listaPelis: movieList});
    },
    show: function(req, res){
        return res.send(`Estamos en el detalle de la película: ${req.params.id}`)
    },
    create: function(req, res){
        return res.send("Estamos en el formulario de carga de películas")
    }

}


module.exports = moviesController