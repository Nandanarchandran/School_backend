
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Attendance = sequelize.define('Attendance', {
    studentName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    adminId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'admins',
        key: 'id'
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    }
  }, {
    timestamps: true,
    tableName: 'Attendances'
  });

  Attendance.associate = function(models) {
    Attendance.belongsTo(models.Admin, {
      foreignKey: 'adminId',
      as: 'admin'
    });
  };

  return Attendance;
};
