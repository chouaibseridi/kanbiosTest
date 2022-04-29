import Card from './card';
import Pagination from './pagination';
import { useState } from 'react';

const Employeeslist = ({ employees }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [employeesPerPage] = useState(8);

    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return( 
        <div className='employees-list'>
            <ul>
                {currentEmployees.map(employee => 
                    <Card employee = {employee} key={employee.id}/>
                )}
            </ul>
            <Pagination
                employeesPerPage={employeesPerPage}
                totalEmployees={employees.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </div>
    )
}


export default Employeeslist;
