module.exports = (app, TaskList) => {
    app.post('/taskslists', (req,res) => {
        try{
            const {title, description} = req.body;
            if (!title) {
                return res.status(400).json({ message: 'le titre est obligatoire' });
              }
              if (!description) {
                return res.status(400).json({ message: 'la description est obligatoire' });
              }        
            TaskList.create({title, description})
                .then(newTaskList => {
                    //status 201 = created
                    res.status(201).json({message:`Votre liste de tâche ${title} est bien ajoutée!`, data: newTaskList});
                })
        }catch(err){
            console.error(err);
            res.status(500).json(err);
        }
    })
}