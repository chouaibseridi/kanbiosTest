import Logo from "../components/logo";
import EmployeeDetails from "../components/employeeDetails"
import Logout from "../components/logout";
import { useLocation } from "react-router-dom";

function Employee () {
    let location = useLocation();
    const {employee} = location.state;

    return(
        <div className="employee-page">
            <Logout />
            <Logo />
            <EmployeeDetails employee = {employee}/>
        </div>
    )
}

export default Employee;