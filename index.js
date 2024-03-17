const { Sequelize } = require('sequelize');


// Option 3: Passing parameters separately (other dialects)


const connection = async () => {
    const sequelize = new Sequelize('sql_demo', 'postgres', '907856', {
        host: 'localhost',
        dialect: 'postgres'
    });
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
connection();

//harshsmsksdk