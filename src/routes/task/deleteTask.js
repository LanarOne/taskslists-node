module.exports = (app, Task) => {
    app.delete('/tasks/:id', async (req, res) => {
        const id = parseInt(req.params.id);
        try {
            const task = await Task.findByPk(id);
            if(!task){
                return res.status(404).json({message:'tâche introuvable'});
            }
            await task.destroy()
                .then(() => {
                    res.json({message:'task deleted'});
                })
        } catch (err){
            console.error(err);
            res.status(500).json({message:'erreur interne', data:err})
        }
    })
}