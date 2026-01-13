import TopProductDetail from '../components/ProductDetailComponent/TopProductDetail'
import LowerProductDetail from '../components/ProductDetailComponent/LowerProductDetail'
import MiddleComponent from '../components/ProductDetailComponent/MiddleComponent'


const ProductDetail = () => {
  return (
    <div className="px-25">
      <TopProductDetail/>
      <MiddleComponent/>
      <LowerProductDetail/>
    </div>
  )
}

export default ProductDetail
