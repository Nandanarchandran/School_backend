'use strict';
module.exports = (sequelize, DataTypes) => {
  const Announcement = sequelize.define('Announcement', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    adminId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Admins', 
        key: 'id'
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    }
  }, {
    timestamps: true,
    tableName: 'Announcements'
  });

  Announcement.associate = function(models) {
    // Define associations here
    Announcement.belongsTo(models.Admin, {
      foreignKey: 'adminId',
      as: 'admin'
    });
  };

  return Announcement;
};
