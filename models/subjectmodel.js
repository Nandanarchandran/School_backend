
module.exports = (sequelize, DataTypes) => {
    const Subject = sequelize.define("Subject", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    // Foreign key association to Class
    Subject.associate = models => {
      Subject.belongsTo(models.Class, {
        foreignKey: {
          allowNull: true,
        },
      });
    };
  
    return Subject;
  };
  