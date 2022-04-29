import { NavLink } from "react-router-dom";

const Card = ({employee}) => {

    return ( 
        <div className='card-container'>
            <div>
                <h3>{employee.firstname} {employee.lastname}</h3>
                <p>{employee.age} ans</p>
                <NavLink to={`/employee/${employee.id}`} state={{ employee: employee }}>
                    <button>Voir plus</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Card;