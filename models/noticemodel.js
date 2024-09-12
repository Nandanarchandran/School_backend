
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notice = sequelize.define('Notice', {
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
      allowNull: true,
      references: {
        model: 'admins', // Name of the Admin table
        key: 'id'
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    }
  }, {
    timestamps: true,
    tableName: 'Notices'
  });

  Notice.associate = function(models) {
    Notice.belongsTo(models.Admin, {
      foreignKey: 'adminId',
      as: 'admin'
    });
  };

  return Notice;
};
