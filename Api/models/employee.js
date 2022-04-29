const seq = require('./sequelize');
const sequelize = seq.sequelize;

class Employee extends seq.Model {
  getId() {
    return this.id;
  }
  getFirstname() {
    return this.firstname;
  }
  getLastname() {
    return this.lastname;
  }
  getAge() {
    return this.age;
  }
  getSalary() {
    return this.salary;
  }
}

Employee.init({
  'id': {
    type: seq.DataTypes.INTEGER(10),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  'firstname': {
    type: seq.DataTypes.STRING(20),
    allowNull: false,
  },
  'lastname': {
    type: seq.DataTypes.STRING(20),
    allowNull: false,
  },
  'age': {
    type: seq.DataTypes.INTEGER(2),
    allowNull: false,
  },
  'salary': {
    type: seq.DataTypes.FLOAT(10),
    allowNull: true,
  },
}, 
{
    sequelize,
    modelName: 'Employee',
    tableName: 'employee',
    createdAt: false,
    updatedAt: false,
});

module.exports = Employee;