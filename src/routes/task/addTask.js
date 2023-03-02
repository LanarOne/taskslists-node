const auth = require('../../authentification/auth');

module.exports = (app, Task) => {
    app.post('/taskslists/:id/tasks', auth, (req,res)=>{
        const id = parseInt(req.params.id);
        const {name, description, amount} = req.body;
        try {
            if(!name){
                return res.status(400).json({message:'votre tâche nécessite un nom'});
            }
            if(!description){
                description : 'description non précisée'
            }
            if(!amount){
                return res.status(400).json({message:'votre tâche nécessite une quantité'});
            }
            Task.create({
                name,
                active : true,
                description,
                amount,
                articleId : id
            })
                .then(newTask=>{
                    res.status(201).json({message:`votre tâche ${name} a été ajoutée`, data:newTask});
                })
        } catch (err){
            console.error(err);
            res.status(500).json({message:'erreur interne, recommencez ultérieurement', data:err});
        }
    })
}