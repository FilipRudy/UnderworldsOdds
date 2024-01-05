import React from "react";

interface PaginationProps {
    postsPerPage: number;
    totalPosts: number;
    currentPage: number;
    paginate: (number: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ postsPerPage, totalPosts, currentPage, paginate }) => {
    const pageNumbers: number[] = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handlePrevClick = () => {
        if (currentPage > 1) {
            paginate(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < pageNumbers.length) {
            paginate(currentPage + 1);
        }
    };

    return (
        <nav>
            <ul className='pagination'>
                <li className='page-item'>
                    <a onClick={handlePrevClick} href='#' className='page-link'>{"<"}</a>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${currentPage === number ? "active" : ''}`}>
                        <a onClick={() => paginate(number)} href='#' className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
                <li className='page-item'>
                    <a onClick={handleNextClick} href='#' className='page-link'>{">"}</a>
                </li>
            </ul>
        </nav>
    );
};

