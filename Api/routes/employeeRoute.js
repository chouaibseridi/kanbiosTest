var express = require('express');
var employeeRouter = express.Router();
var employeeController = require('../controllers/employeeController');
var auth = require('../middlewhare/auth')

// this endpoint upload employees from excel file to database
employeeRouter.post('/upload', auth.authenticateToken, function(req, res) {
    employeeController.uploadEmployeesFromExcel(req, res);
});

// this endpoint deletes all employees from the database
employeeRouter.get('/deletealldata', auth.authenticateToken, function(req, res) {
    employeeController.deleteAllEmployees(req, res);
});

// this endpoint returns a list of all the employee
employeeRouter.get('/employees', auth.authenticateToken, function(req, res) {
    employeeController.getAllEmployees(req, res);
});

// this endpoint returns a single employee by his Id
employeeRouter.get('/employee/:id', auth.authenticateToken, function(req, res) {
    employeeController.getEmployeeById(req, res); 
});

module.exports = employeeRouter;
