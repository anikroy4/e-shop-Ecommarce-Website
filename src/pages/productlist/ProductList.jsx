
import Container from '../../components/layers/Container'
import ProductListCategory from './ProductListCategory';
import ProductListContent from './ProductListContent';


const ProductList = () => {
  

return (

  <Container>
    <div className=' flex justify-between'>
      <ProductListCategory/>
      <ProductListContent />
          
    </div>
    </Container>
  )
}

export default ProductList
