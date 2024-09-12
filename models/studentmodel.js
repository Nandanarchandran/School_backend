
module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define("Student", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
    });
    
    
    Student.associate = models => {
      Student.belongsTo(models.Class, {
        foreignKey: {
          allowNull: true,
        },
      });
    };
  
    return Student;
  };
  