
import Container from '../../components/layers/Container'
import ProductLayout from '../../components/layers/ProductLayout';
import ProductListCategory from './ProductListCategory';


const ProductList = () => {
  

    const ProductsList = Array.from({ length: 160 }, (_, index) => ({
      id: index + 1,
      name: `Product ${index + 1}`,
      price: (Math.random() * 100).toFixed(2)
    }));

return (

  <Container>
    <div className=' flex justify-between'>
      <ProductListCategory/>

      <div className='w-[80%]'>
        <div className='flex gap-1 flex-wrap '>
          {ProductsList.map((item, index) => (
            <div className="w-[24%]" key={index}>
              <ProductLayout percentTag={true} discount="50" category="Audio" title="WH-1000XM4 Wireless Headphones High Qu..." totalRating="120" rating="4" price="118.00" border={true} bg="transparent" stock={false} stockAmount="" isCircle={false}/>
            </div>
          ))}

        </div>
          
      </div>
          
    </div>
    </Container>
  )
}

export default ProductList
