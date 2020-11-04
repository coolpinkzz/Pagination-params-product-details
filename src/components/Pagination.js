import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = ({ postPerPage, totalPost, paginate, currentPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div>
            <nav>
                <ul className="pagination justify-content-center">
                    {/* <li className='page-item'><Link onClick={() => paginate(currentPage - 1)} href="!#" className='page-link'> Prev</Link> </li> */}
                    {pageNumbers.map(number => (

                        <li key={number} className='page-item'>
                            <Link onClick={() => paginate(number)} to="#" className='page-link'>
                                {number}
                            </Link>
                        </li>
                    ))}
                    {/* <li className='page-item'><Link onClick={() => paginate(currentPage + 1)} href="!#" className='page-link'> Next</Link> </li> */}

                </ul>
            </nav>
        </div>

    )
}
export default Pagination;