const bcrypt = require('bcrypt');

module.exports = (app, User) => {
    app.post('/users', (req,res) => {
        try{
            const password = req.body.password;
            const email = req.body.email;
            User.findOne({ where: { email } })
                .then(element => {
                    if(element){
                        return res.status(409).json({message: 'un compte existe déjà avec cet email'})
                    }
                    bcrypt.hash(password, 10)
                    .then(hash => {
                        User.create({
                            email: email,
                            password: hash
                        }).then(element => {
                            res.json({message: `User ${email} ajouté avec succes`, data: element});
                        })
                    })
                });   
        }catch(error){
            res.status(500).json({
                message: 'Une erreur s\'est produite lors de la création de l\'utilisateur'
            });
        }
    })
}