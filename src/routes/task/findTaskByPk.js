module.exports = (app, Task) => {
    app.get('/tasks/:id', async (req,res) => {
        const id = parseInt(req.params.id);
        try {
            const task = await Task.findByPk(id);
            if(!task) {
                const message = 'Tâche introuvable'
                return res.status(404).json({message});
            }
            const message = 'tâche trouvée';
            return res.status(200).json({message, data: task});
        } catch (err) {
            console.error(err);
            const message = 'erreur interne, veuillez renouveler la demande ultérieurement'
            return res.status(500).json({message, data : err});
        }
    })
}