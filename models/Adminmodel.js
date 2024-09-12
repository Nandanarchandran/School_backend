
module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define('Admin', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Admin.associate = function(models) {
    Admin.hasMany(models.Notice, {
      foreignKey: 'adminId',
      as: 'notices'
    });
    Admin.hasMany(models.Attendance, {
      foreignKey: 'adminId',
      as: 'attendances'
    });
  };

  return Admin;
};
