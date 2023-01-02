import styles from './DonutListing.module.scss';

type Props = {
    containerClass?: string;
    imageClass?: string;
    addToCartClass?: string;
    // size: number;
}

const DonutListing = ({ containerClass, imageClass, addToCartClass }: Props) => {
    return (
        <div className={`${styles.container} ${containerClass}`}>

            <div
                className={`${styles.image} ${imageClass}`}

            >

            </div>

            <button type='button' name='Add to Cart' className={`${styles.addToCart} ${addToCartClass}`}>
                Add to Cart
            </button>

        </div>
    );
}

export default DonutListing;