import DonutListing from '@components/DonutListing';
import useClassicDonuts from '@hooks/useClassicDonuts';
import Image from 'next/image';
import styles from './ClassicDonuts.module.scss';

const ClassicDonuts = () => {
    const [donuts] = useClassicDonuts();

    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                {
                    donuts.map((v) =>
                        <DonutListing
                            key={v.id}
                            containerClass={styles.listingContainerClass}
                            price={v.price}
                        >
                            <Image
                                src={v.image}
                                alt={`${v.name} listing for ${v.price}`}
                                fill
                            />
                        </DonutListing>
                    )
                }
            </div>

            <div className={styles.sidebar}>
                <div className={styles.textWrapper}>

                    <h2>The Classics</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In quasi nemo error mollitia ipsam ad at magni provident maiores minima. Ab, magni ullam! Accusamus, harum maxime obcaecati illum deserunt aperiam.
                    </p>

                </div>

                <div className={styles.buttonWrapper}>
                    <button type='button'>
                        Browse All
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ClassicDonuts;
