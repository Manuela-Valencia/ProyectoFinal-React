import { useState } from "react";
import "./style/sliderProduct.css";

const SliderImgs = ({ product }) => {

    const [indexImg, setIndexImg] = useState(0);

    const styleMovible = {
        transform: `translateX(calc((-${indexImg} / 3) * 100%))`,
    };


    const handlePrevius = () => {
        setIndexImg((prevIndex) => {
            if (prevIndex === 0) {
                return product?.images.length - 1;
            } else {
                return prevIndex - 1;
            }
        });

    };

    const handleNext = () => {
        setIndexImg((prevIndex) => {
            if (prevIndex === product?.images.length - 1) {
                return 0;
            } else {
                return prevIndex + 1;
            }
        });
    };

    return (
        <div className="contenedor__slider">
            <div className='slider'>
                <button
                    onClick={handlePrevius}
                    className='slider__btn slider__left'
                >
                    <i className="fi fi-rs-angle-left"></i> &lt;
                </button>
                <div style={styleMovible} className='slider__movible'>
                    {product?.images.map((imgInfo) => (
                        <div className='slider__img-container' key={imgInfo.id}>
                            <img
                                className='slider__img'
                                src={imgInfo.url}
                                alt={`imagen${imgInfo.id}`}
                            />
                        </div>
                    ))}
                </div>
                <button
                    onClick={handleNext}
                    className='slider__btn slider__right'
                >
                    <i className="fi fi-rs-angle-right"></i> &gt;
                </button>
            </div>
            <div className='slider__footer-container'>
                <div className='slider__footer'>
                    {product?.images.map((imgInfo, i) => (
                        <div
                            className={`slider__footer-img-container ${
                                i === indexImg && "slider__img-active"
                            }`}
                            key={imgInfo.id}
                            onClick={() => setIndexImg(i)}
                        >
                            <img
                                className='slider__img'
                                src={imgInfo.url}
                                alt={`imagen${imgInfo.id}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SliderImgs;