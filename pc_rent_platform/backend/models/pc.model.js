const db = require("../models");
module.exports = (sequelize, DataTypes) => {
  const Pc = sequelize.define("pcs", {
    cpu: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gpu: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ramType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ramSpeed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ramAmount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pcType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pcName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  // Pc.hasMany(db.PcImage);
  Pc.sync();
  return Pc;
};
