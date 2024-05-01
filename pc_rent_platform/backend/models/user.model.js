const db = require(".");
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define(
    "address2s",
    {
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      county: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      municipality: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      zipCode: {
        type: DataTypes.STRING(6),
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      street: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      streetNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      apartmentNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  const User = sequelize.define(
    "users2s",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      passEncoded: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      salt: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      birthDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );

  User.hasOne(Address);
  Address.belongsTo(User);

  User.Address = User.hasOne(Address);
  console.log(db);
  Address.sync();
  User.sync();
  console.log(User);
  return User;
};
