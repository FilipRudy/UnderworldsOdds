import React from "react";

interface PaginationProps {
    postsPerPage: number;
    totalPosts: number;
    paginate: (number: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers: number[] = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} href='#!' className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

