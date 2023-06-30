import { useEffect } from "react";
import usePurchase from "../hooks/usePurchase";
import PurchasesCard from "../components/Purchases/PurchasesCard";
import '../components/Purchases/style/purchases.css';
import { Link } from "react-router-dom";

const PurchasePage = () => {
    const { purchases, getAllPurchases } = usePurchase();

    useEffect(() => {
        getAllPurchases();
    }, []);

    const comprasPorDia = purchases?.reduce((result, prod) => {
        const fecha = new Date(prod.updatedAt);
        const dia = fecha.toLocaleDateString();

        if (!result[dia]) {
            result[dia] = [];
        }

        result[dia].push(prod);
        return result;
    }, {});


    return (
        <>
            <div className="purchases">
                <section className="purchases__encabezado">
                    <header className="purchases__header">
                        <Link to='/'>Home</Link>
                        <div className="purchases__separador"></div>
                        <b className="purchases__subtitulo">purchases</b>
                    </header>
                </section>
                <h2 className="purchases__titulo">My purchases</h2>
                <div className="purchases__contenedor">
                    {
                        comprasPorDia &&
                        Object.entries(comprasPorDia)?.map(([dia, producto]) => (
                            <div className="purchases__contenedor--productos" key={dia}>
                                <h3 className="purchases__dia">{dia}</h3>
                                {
                                        producto?.map(prod => (
                                        <PurchasesCard key={prod.id} prod={prod} />
                                    ))
                                }
                                
                            </div>
                        ))
                    }
                </div>
            </div>
                <div className='cart__contenedor-footer--home regresarHome'>
                    <Link className='cursor' to={"/"}>
                        <div className='cart__contenedor-footer--volver'>
                            <i className=' iconFooter fi fi-rs-angle-double-small-left'></i>
                            <p>Continue shopping</p>
                        </div>
                    </Link>
                </div>
        </>
    );
};

export default PurchasePage;