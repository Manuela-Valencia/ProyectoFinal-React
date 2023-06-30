import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { getProductsThunk } from "../../store/slices/Products.slice";
import { useDispatch } from "react-redux";
import './styles/filterCategory.css'

const FilterCategori = ({setIsOpen, isOpen}) => {
    const baseUrl = "https://e-commerce-api-v2.academlo.tech/api/v1";

    const [categories, getCategory] = useFetch(baseUrl);

    useEffect(() => {
        getCategory("/categories");
    }, []);


    const dispatch = useDispatch();

    const handleFilterCategory = (id) => {
        if (id) {
            const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`;
            dispatch(getProductsThunk(url));
        } else {
            dispatch(getProductsThunk());
        }
        setIsOpen(!isOpen)
    };

    return (
        <article className="filterCategory">
            <header className="filterCategory__header">
                <h3>Category</h3>
                <i className="fi fi-rs-angle-small-down"></i>
            </header>
            <ul className="filterCategory__ul">
                <li 
                    className="filterCategory__list"
                    style={{cursor: 'pointer'}}
                    onClick={() => handleFilterCategory()}
                    >All Categories
                </li>
                {categories?.map((category) => (
                    <li
                        className="filterCategory__list"
                        style={{cursor: 'pointer'}}
                        onClick={() => handleFilterCategory(category.id)}
                        key={category.id}
                    >
                        {category.name}
                    </li>
                ))}
            </ul>
        </article>
    );
};

export default FilterCategori;