import React from 'react'

const Pagination = ({totalItems, itemsPerPage, currentPage,onPageChange}) => {

    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const maxpagesToShow = 10;
    const pagesToShowBeforeAfter = 3;
    
    let startPage = Math.max(1, currentPage - pagesToShowBeforeAfter);
    let endPage = Math.min(totalPages, currentPage + pagesToShowBeforeAfter);
    

    if (endPage - startPage + 1 < maxpagesToShow) {
        if (startPage > 1) {
            startPage = Math.max(1, endPage - maxpagesToShow + 1);
        }
        endPage = Math.min(totalPages, startPage + maxpagesToShow - 1);
    }

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
        
        pageNumbers.push(i);  
    }
    
    
    return (
    <div className='flex items-center justify-center p-4 w-full '>
        <button 
        onClick={()=> onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className='px-3 py-1 bg-gray-300 cursor-pointer rounded disabled:opacity-50 hover:bg-gray-300 transition-colors duration-200'
        >
            
        &lt;
        </button>
        {pageNumbers.map(( number, index) => (
            <button 
            key={index}
            onClick={() => onPageChange(number)}
            className=' mx-2 px-3 py-1 bg-gray-300 cursor-pointer rounded disabled:opacity-50 hover:bg-gray-300 transition-colors duration-200'
            >
            {number}
            </button>
        ))}

        <button onClick={()=>onPageChange(currentPage+1)}
            disabled={currentPage === totalPages}
            className='px-3 py-1 bg-gray-200 cursor-pointer rounded disabled:opacity-50 hover:bg-gray-300 transition-colors duration-200'
        >
            
        &gt;

        </button>
    

    </div>
  )
}

export default Pagination