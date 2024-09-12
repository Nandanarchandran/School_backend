require('dotenv').config(); 

module.exports = {
    development: {
        username: process.env.DB_USER || 'root',       
        password: process.env.DB_PASSWORD || 'Nandana@2003',    
        database: process.env.DB_NAME || 'schoolattendancesystem',       
        host: process.env.DB_HOST || '127.0.0.1',            
        dialect: 'mysql',                    
    },
};
