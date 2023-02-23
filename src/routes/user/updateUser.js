const bcrypt = require('bcrypt');
const auth = require('../../authentification/auth');

module.exports = (app, User) => {
    app.put('/users/:id',auth, async (req,res) => {
        const id = req.params.id;
        const {email, password} = req.body;
            
        try{
            User.findByPk(id)
            .then(user => {
                if(user === null){
                    return res.status(404).json({message: `User ${email} introuvable`})
                }
                bcrypt.hash(password, 10)
                .then(hash => {
                    user.update({email, password: hash})
                    .then(()=>{
                        res.json({message: `User ${email} modifier`, data: user})
                    })
                })                
            })
        }catch(err){
            console.error(err);
            res.status(500).json({message: 'Erreur lors de la modification de l\'utilisateur', data: error});
        }
      }
    )
}