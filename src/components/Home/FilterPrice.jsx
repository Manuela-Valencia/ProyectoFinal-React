import { useForm } from "react-hook-form";

const FilterPrice = ({setPriceMinMax, priceMinMax}) => {

    const {register, handleSubmit, reset} = useForm()

    const submit = (data) => {
        const min = data.from.trim() === '' ? 0 : +data.from
        const max = data.to.trim() === '' ? Infinity : +data.to

        if (max < min) return

        setPriceMinMax({min, max})
    }

    const handleClearFilter = () => {
        setPriceMinMax({min: 0, max: Infinity})
        reset({
            from: '',
            to: ''
        })
    }

    return (
        <article>
            <header className="filterCategory__header">
                <h3>Price</h3>
                <i className="fi fi-rs-angle-small-down"></i>
            </header>
            <form onSubmit={handleSubmit(submit)} className="filterCategory__form">
                <div className="filterCategory__label">
                    <label htmlFor='from'>From</label>
                    <input {...register('from')} type='number' id="from"/>
                </div>
                <div className="filterCategory__label">
                    <label htmlFor='to'>To</label>
                    <input {...register('to')} type='number' id="to"/>
                </div>
                <button className="filterCategory__btn">Filter price</button>
            </form>
            {
                priceMinMax.min !== 0 || priceMinMax.max !== Infinity 
                ? (<div className="filterCategory__filtros">
                        <p>{`from ${priceMinMax.min} ${priceMinMax.max === Infinity 
                            ? ''
                            : `to ${priceMinMax.max}`}`} 
                        </p>
                        <p className="filterCategory__filtros-X" onClick={handleClearFilter}>
                            <i className="fi fi-rs-cross"></i>
                        </p> 
                    </div>)
                : <></>
            }
        </article>
    );
};

export default FilterPrice;