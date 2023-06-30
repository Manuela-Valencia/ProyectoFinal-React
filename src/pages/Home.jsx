import { useSelector } from "react-redux";
import CardProduct from "../components/Home/CardProduct";
import "../components/Home/contenedorProducts.css";
import { useState } from "react";
import FilterCategori from "../components/Home/FilterCategori";
import FilterPrice from "../components/Home/FilterPrice";
const Home = () => {
    const productsG = useSelector((state) => state.productsG);

    const [priceMinMax, setPriceMinMax] = useState({ min: 0, max: Infinity });

    /* Filter */
    const [isOpen, setIsOpen] = useState(true);

    const handleFilterOpen = () => {
        setIsOpen(!isOpen);
    };

    /* Inf del input Busqueda automatica */

    const [inputValue, setInputValue] = useState("");

    const handleSearchName = (e) => {
        setInputValue(e.target.value.toLowerCase());
    };

    const cbFilter = (prod) => {
        return prod.title.toLowerCase().includes(inputValue)
    };

    const cbFilterPrice = (prod) => {

        return priceMinMax.min <= prod.price && priceMinMax.max >= prod.price
    }

    return (
        <section className='home__products'>
            <aside className={`modal__category--filter ${isOpen && 'open'}`}>
                <div className='aside'>
                    <button
                        onClick={handleFilterOpen}
                        className='modal__category--cerrar'
                    >
                        <i className='fi fi-rs-cross'></i>
                    </button>
                    <h3 className='modal__category-titulo'>Filters</h3>
                    <div>
                        <FilterCategori isOpen={isOpen} setIsOpen={setIsOpen} />
                        <FilterPrice setPriceMinMax={setPriceMinMax} priceMinMax={priceMinMax} />
                    </div>
                </div>
            </aside>
            <div className="homeProductContent">
                <div className='home__products-form'>
                    <div className='home__products-input--contenedor'>
                        <div className='home__input--contenedor-icon'>
                            <input
                                placeholder='What are you looking for?'
                                className='home__products-input'
                                value={inputValue}
                                onChange={handleSearchName}
                                type='text'
                            />
                            <i className=' home__input-icon fi fi-rs-search'></i> 
                        </div>
                    </div>
                    <button
                        onClick={handleFilterOpen}
                        className={`home__products-btn`}
                    >
                        <i className='fi fi-rs-filter'></i>
                        <span>Filters</span>
                    </button>
                </div>
                <div className='contenedor__productos'>
                    {productsG?.filter(cbFilter).filter(cbFilterPrice).map((prod) => (
                        <CardProduct product={prod} key={prod.id} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Home;