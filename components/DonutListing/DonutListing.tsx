import { ReactNode } from 'react';
import styles from './DonutListing.module.scss';

type Props = {
    price: string;
    containerClass?: string;
    imageClass?: string;
    addToCartClass?: string;
    children?: ReactNode;
}

const DonutListing = ({ price, containerClass, imageClass, addToCartClass, children }: Props) => {
    return (
        <div className={`${styles.container} ${containerClass}`}>

            <div
                className={`${styles.image} ${imageClass}`}
            >
                {children}
            </div>

            <button type='button' name='Add to Cart' className={`${styles.addToCart} ${addToCartClass}`}>
                <span className={styles.price}>
                    ${price}
                </span>

                <span className={styles.addToCartText}>
                    Add to Cart
                </span>
            </button>

        </div>
    );
}

export default DonutListing;