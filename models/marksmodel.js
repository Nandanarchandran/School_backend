
module.exports = (sequelize, DataTypes) => {
    const Marks = sequelize.define("Marks", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      marks: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      grade: {
        type: DataTypes.STRING,
      },
    });
  
    Marks.associate = models => {
      Marks.belongsTo(models.Student, {
        foreignKey: {
          allowNull: false,
        },
      });
      Marks.belongsTo(models.Subject, {
        foreignKey: {
          allowNull: false,
        },
      });
    };
  
    return Marks;
  };
  