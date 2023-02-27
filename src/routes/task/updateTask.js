module.exports = (app, Task) => {
    app.put('/tasks/:id', (req,res) => {
        const id = parseInt(req.params.id);
        const {name, description, amount} = req.body;
        try{
            Task.findByPk(id)
                .then(task => {
                    if(task === null){
                        return res.status(404).json({message: 'cette tâche est introuvable'});
                    }
                    task.update({name, description, amount})
                        .then(()=>{
                            res.json({message: `Tâche ${name} modifié`, data: task})
                        })
                })
        }catch(err){
            console.error(err);
            res.status(500).json({message: 'error 500', data: error});
        }
    })
}