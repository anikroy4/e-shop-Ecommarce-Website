import React from 'react'
import Arrow from '../icon/Arrow';

const Pagination = ({totalItems, itemsPerPage, currentPage,onPageChange}) => {

    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const maxpagesToShow = 4;

    const pageNumbers = [];

    if (totalPages <= maxpagesToShow) {
        for (let i = 0; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
    }
    else {
        const startPage = [1,2]
        const endPage = [totalPages-1,totalPages];
        const middlePages = [ currentPage - 1, currentPage, currentPage + 1].filter((page) => (page > 2 && page < totalPages-1
        ));
        

        const uniquePages = Array.from(new Set([...startPage, ...middlePages, ...endPage])).sort((a, b) => a - b);
        
    

        for (let i = 0; i < uniquePages.length; i++) {
            
                pageNumbers.push(uniquePages[i]);

                if (i < uniquePages.length - 1 && uniquePages[i + 1] - uniquePages[i] > 1) {
                pageNumbers.push('...');
            }

        }    

    }

    

    

    return (
    <div className='flex items-center justify-center p-4 w-full '>
        <button 
        onClick={()=> onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className=' py-[5px] px-[10px] bg-none cursor-pointer rounded disabled:opacity-80 '
        >
            
        <Arrow className="rotate-180"/>
        </button>
        {pageNumbers.map((number, index) =>
        
        number === '...' ? (
          <span key={`ellipsis-${index}`} className="mx-7 px-[18px] py-[9px]">
            ...
          </span>
        ) :
        
        (
            <button
                key={index}
                onClick={() => onPageChange(number)}
                className={`mx-7 px-[18px] py-[9px] text-xl font-semibold leading-7.5  font-["Poppins"] cursor-pointer rounded disabled:opacity-50 transition-colors duration-200 ${currentPage === number ? 'active bg-[#FF624C] text-[#fff] rounded-[5px]' : 'bg-none text-[#303030] rounded-[5px]'}`}
            >
                {number}
            </button>
        ))}
       
        <button onClick={()=>onPageChange(currentPage+1)}
            disabled={currentPage === totalPages}
            className='py-[5px] px-[10px] bg-none cursor-pointer rounded disabled:opacity-80'
        >
            
        <Arrow />

        </button>
    
    </div>
  )
}

export default Pagination