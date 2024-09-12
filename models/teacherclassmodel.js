
module.exports = (sequelize, DataTypes) => {
    const TeacherClass = sequelize.define("TeacherClass", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    });
  
    TeacherClass.associate = models => {
      TeacherClass.belongsTo(models.Teacher, {
        foreignKey: {
          allowNull: false,
        },
      });
  
      TeacherClass.belongsTo(models.Class, {
        foreignKey: {
          allowNull: false,
        },
      });
    };
  
    return TeacherClass;
  };
  