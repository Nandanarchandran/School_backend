// models/index.js
const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME || 'schoolattendancesystem', 
                                process.env.DB_USER || 'root', 
                                process.env.DB_PASSWORD || 'Nandana@2003', 
                                {
                                  host: process.env.DB_HOST || '127.0.0.1',
                                  dialect: 'mysql',
                                });

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Import models
db.Admin = require('./adminmodel')(sequelize, DataTypes);
db.Teacher = require('./teachermodel')(sequelize, DataTypes);
db.Class = require('./classmodel')(sequelize, DataTypes);
db.Student = require('./studentmodel')(sequelize, DataTypes);
db.Subject = require('./subjectmodel')(sequelize, DataTypes);
db.TeacherClass = require('./teacherclassmodel')(sequelize, DataTypes);
db.Attendance = require('./attendancemodel')(sequelize, DataTypes);
db.Marks = require('./marksmodel')(sequelize, DataTypes);
db.Notice = require('./noticemodel')(sequelize, DataTypes);
db.Announcement = require('./announcementsmodel')(sequelize, DataTypes);

// Define associations
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
