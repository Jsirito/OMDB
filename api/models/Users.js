const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/db");
const bcrypt = require("bcrypt");

//Crea un modelo de Users
//hashea el password usando la libreria de bcrypt
class User extends Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}

//Define el modelo User
User.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
    },
    salt: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);

//Metodo de instancia que genera un salt a partir del password
User.beforeCreate((user) => {
  return bcrypt
    //Genera un salt
    .genSalt(16)
    //Hashea usando el salt
    .then((salt) => {
      user.salt = salt;
      return user.hash(user.password, salt);
    })
    .then((hash) => {
      user.password = hash;
    });
});

module.exports = User;
