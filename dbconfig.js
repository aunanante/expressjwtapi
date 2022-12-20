const { Sequelize } = require("sequelize");


const sequelise = new Sequelize('projectexpress', 'root', 'Onanan1956Jc_24.01.2020', {
    dialect: "mysql",
    host: "localhost"
})

function init() {
    sequelise.sync({
        alter: true
    }).then(res => {
        console.log("Database connection successful")
    }).catch(err => console.log("Errors", err))
}

async function connect()
{
    try {
        await sequelise.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

function close()
{
    sequelise.close()
}



exports.init = init
exports.sequelise = sequelise
exports.connect = connect
exports.close = close


const { User } = require('./models/User')
const { Team } = require('./models/Team')
const { Project } = require('./models/Project')

Team.hasMany(Project, {
    foreignKey: {
        allowNull: true
    }
})
Team.hasMany(User, {
    foreignKey: {
        name: "team_id",
        allowNull: true
    }
})
