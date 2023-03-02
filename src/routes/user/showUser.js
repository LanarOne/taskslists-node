const auth = require('../../authentification/auth');

module.exports = (app, User) => {
    app.get('/users', auth, (req, res) => {
        try {
            const users = User.findAll({
                order: [['created', 'DESC']]
            })
                .then(users => res.json(users))
        } catch (err) {
            console.error(err);
            res.status(500).json({message: 'la connexion a échoué'})
        }
    })
}