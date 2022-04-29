const xlsx = require("node-xlsx");
const Employee = require('../models/employee');

/* 
    function that uploads employees from excel file to the database
    sends an array of employee objects to response
*/
exports.uploadEmployeesFromExcel = async (req, res) => {
    const data = xlsx.parse("files/dataset.xls")[0].data;
    const rows = data.slice(1);
    const employees = [];

    rows.forEach((row) => {
        if (row.length>0) {
            let employee = {
                firstname: row[0],
                lastname: row[1],
                age: row[2],
                salary: row[3],
            }
        employees.push(employee);
        }
    });

    await Employee.bulkCreate(
        employees, 
        { fields: ['firstname', 'lastname', 'age', 'salary'] })
    .then(employees => {
        res.json(employees);
    })
    .catch(err => {
        res.send({message: err.message});
    });  
}  

/* 
    function that fetchs all employees from the database
    sends an array of employees objects to response
*/
exports.getAllEmployees = async (req, res) => {
    await Employee.findAll()
    .then(employees => {
        res.json(employees);
    })
    .catch(err => {
        res.send({message: err.message});
});  
}  

/* 
    function that fetchs a single employee from the database by his Id
    sends a employee object to response
*/
exports.getEmployeeById = async (req, res) => {
    await Employee.findOne({where: { id: req.params.id }})
    .then(employee => {
        employee !== null ? res.json(employee) : res.json({"error": "no employee found with the id " +req.params.id })
    })
    .catch(err => {
        res.send({message: err.message});
    });
}


/* 
    function that deletes all employees from the database
*/
exports.deleteAllEmployees = async (req, res) => {
    await Employee.truncate()
    .then(() => {
        res.status(200).send("All employees deleted !");
    })
    .catch(err => {
        res.send({message: err.message});
});  
}  