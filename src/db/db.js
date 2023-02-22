const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    'tasks_list_bdx09',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mariadb',
        logging: false
    }
);

sequelize.authenticate()
    .then(_=> console.log('La connexion a la bdd a réussi'))
    .catch(error => console.error(error));

sequelize.sync()
    .then(_=>console.log('la methode sync est réussi'))
    .catch(error=> console.error(error));

module.exports = sequelize;
