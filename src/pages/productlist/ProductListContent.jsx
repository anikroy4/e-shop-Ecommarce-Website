import React from 'react'
import ProductLayout from '../../components/layers/ProductLayout'
import Pagination from '../../components/Pagination';
import { useState } from 'react';


const ProductListContent = () => {


  let [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage=16;

      const productsList = Array.from({ length: 160 }, (_, index) => ({
      id: index + 1,
      name: `Product ${index + 1}`,
      price: (Math.random() * 100).toFixed(2)

    }));

    const startIndex=(currentPage - 1)*itemsPerPage;
    const currentProducts= productsList.slice(startIndex, startIndex+itemsPerPage)

  return (
    <>
        <div className='w-[1139px]'>
          <h4 className='mb-6 font-["Poppins"] text-4xl leading-[46px] font-semibold text-[#303030]'>
            Products
          </h4>
          <div className='flex justify-between'>
            <p className='font-["Montserrat"] text-base leading-6 font-normal text-[#303030]'>
              Showing {(currentPage - 1) * itemsPerPage + 1}
              -
              {Math.min(currentPage * itemsPerPage, productsList.length)} of {productsList.length} results.
            </p>
            <div>
               <div>
                 
               </div>
            </div>
          </div>
        <div>
          <div className='flex gap-3 flex-wrap '>
            {currentProducts.map((item, index) => (
              <div className="w-[275px]" key={index}>
                <ProductLayout percentTag={true} discount="50" category="Audio" title="WH-1000XM4 Wireless Headphones High Qu..." totalRating="120" rating="4" price="118.00" border={true} bg="transparent" stock={false} stockAmount="" isCircle={false}/>
              </div>
            ))}
            <Pagination 
              totalItems={productsList.length} 
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
            
        </div>
      </div>
    </>
  )
}

export default ProductListContent
