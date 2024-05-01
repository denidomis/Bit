module.exports = (sequelize, DataTypes) => {
  const PcImage = sequelize.define(
    "pcimages",
    {
      uri: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
  PcImage.sync();
  return PcImage;
};
