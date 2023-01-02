import DonutListing from '@components/DonutListing';
import styles from './ClassicDonuts.module.scss';

const ClassicDonuts = () => {

    const StyledListing = () => (
        <DonutListing
            containerClass={styles.listingContainerClass}
        />)

    return (
        <div className={styles.container}>
            <div className={styles.menu}>

                <StyledListing />
                <StyledListing />

                <StyledListing />
                <StyledListing />

                <StyledListing />
                <StyledListing />

                <StyledListing />
                <StyledListing />

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
