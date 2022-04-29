const seq = require('./sequelize');
const sequelize = seq.sequelize;

class User extends seq.Model {
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getPassword() {
    return this.password;
  }
}

User.init({
  'id': {
    type: seq.DataTypes.INTEGER(10),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  'email': {
    type: seq.DataTypes.STRING(20),
    allowNull: false,
  },
  'password': {
    type: seq.DataTypes.STRING(20),
    allowNull: false,
  },
}, 
{
    sequelize,
    modelName: 'User',
    tableName: 'user',
    createdAt: false,
    updatedAt: false,
});

module.exports = User;