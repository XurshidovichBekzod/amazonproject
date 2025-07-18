import Carousel from '../../components/carousel/Carousel'
import Products from '../../components/productCard/Products'
import Skleton from '../../components/productCard/Skleton'
import { useFetch } from '../../hook/useFetch'
const Product = () => {
    const { data, error, loading } = useFetch("/products", { limit: 10, })
    return (
        <>
            <Carousel />
            {
                error && <p>something went weong :(</p>
            }
            { loading ? <Skleton/> : <Products data={data} /> }


        </>
    )
}

export default Product