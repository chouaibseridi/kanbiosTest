import { NavLink } from "react-router-dom";

const EmployeeDetails = ({ employee }) => {

    return ( 
        <div className="employeeDetails">
            <div className="back-button">
                <img src="/img/arrow-left.png" alt=""/>
                <NavLink to='/employees'>Retour</NavLink> 
            </div>
            <div className="circle"/>
            <div className='infos'>
                <h2>{employee.firstname} {employee.lastname}</h2>
                <br/><br/>
                <h4>Age</h4>
                <p>{employee.age}</p>
                <br/>
                <h4>Salary</h4>
                <p>{employee.salary} €</p>
            </div>
            <NavLink to='/employees'><button>Nouvelle recherche</button></NavLink> 
        </div>
    )
}

export default EmployeeDetails;