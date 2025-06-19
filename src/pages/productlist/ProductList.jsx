
import Container from '../../components/layers/Container'
import ProductListCategory from './ProductListCategory';
import ProductListContent from './ProductListContent';


const ProductList = () => {
  

return (

  <Container>
    <div className=' flex justify-between gap-[26px] mt-16 mb-20'>
      <ProductListCategory/>
      <ProductListContent />
          
    </div>
    </Container>
  )
}

export default ProductList
