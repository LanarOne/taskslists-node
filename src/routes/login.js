const bcrypt = require('bcrypt');
const privateKey = require('../authentification/key');
const jwt = require('jsonwebtoken');

module.exports = (app, User) => {
    app.post('/login', (req,res) => {
        const email = req.body.email;
        const password = req.body.password;
        User.findOne({ where: {email: email}})
        .then(element => {
            if(!element){
                return res.status(404).json({message: "le user avec l'email " + email + " n'éxiste pas"});
            }
            bcrypt.compare(password, element.password)
            .then(passwordValid => {
                if(passwordValid === true){

                    const token = jwt.sign(
                        {userId: element.id},
                        privateKey,
                        {expiresIn: '1h'}
                    )
                    return res.json({message: 'user bien co', data: element, token})
                }else{
                    return res.json({message: 'mdp false pour le user ' + email})
                }
            })
        });     
    })
}