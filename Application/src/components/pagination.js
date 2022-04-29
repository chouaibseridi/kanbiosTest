const Pagination = ({ employeesPerPage, totalEmployees, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalEmployees / employeesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <div onClick={() => paginate(number)} className='page-link'>
              {number === currentPage ? <div className="page-item" id="current-item">{number}</div>: number} 
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
