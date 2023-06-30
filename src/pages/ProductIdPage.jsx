import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import ProductInf from "../components/ProductId/ProductInfo";
import SilimartProducts from "../components/ProductId/SimilarProducts";
import "../components/ProductId/style/productBody.css";
import SliderImgs from "../components/ProductId/SliderImgs";


const ProductIdPage = () => {
    const { id } = useParams();
    const baseUrl = "https://e-commerce-api-v2.academlo.tech/api/v1";
    const [product, getProductById] = useFetch(baseUrl);

    useEffect(() => {
        getProductById(`/products/${id}`);
    }, [id]);
    return (
        <div className='productBody'>
            <div className='productBody__section--product'>
                <SliderImgs product={product} />
                <ProductInf product={product} />
            </div>
            <SilimartProducts product={product} />
        </div>
    );
};

export default ProductIdPage;