import { useNavigate } from "react-router-dom";
import "./style/purchasesCard.css";

const PurchasesCard = ({ prod }) => {
    const navigate = useNavigate();

    const handleProduct = () => {
        navigate(`/product/${prod.product.id}`);
    };

    return (
        <article onClick={handleProduct} className='purchasesCard'>
            <figure className='purchasesCard__img'>
                <img
                    src={prod.product.images[0].url}
                    alt={prod.product.title}
                />
            </figure>
            <div className='purchasesCard__body'>
                <h3 className='purchasesCard__titulo'>{prod.product.title}</h3>
                <div className='purchasesCard__priceC'>
                    <span className='purchasesCard__price'>
                        {prod.quantity}
                    </span>
                </div>
                <div className='purchasesCard__totalC'>
                    <span className='purchasesCard__total'>
                        $ {prod.product.price}
                    </span>
                </div>
            </div>
        </article>
    );
};

export default PurchasesCard;