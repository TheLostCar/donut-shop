import useBannerDonuts from '@hooks/useBannerDonuts';
import useCarousel from '@hooks/useCarousel';
import useInterval from '@hooks/useInterval';
import Image from 'next/image';
import styles from './Hero.module.scss';

const Hero = () => {
    const [donuts] = useBannerDonuts();
    const [index, setIndex, nextIndex] = useCarousel(donuts.length);
    useInterval(() => nextIndex(), 5000, [index]);


    return (
        <div className={styles.container}>
            <div className={styles.a}>
                <h1>Donuts</h1>

                <div className={styles.leftSideContent}>
                    <h2>Header</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsam eum rerum illum eos, quasi commodi tenetur itaque ex facilis, labore odit in, dolor molestiae vitae totam atque optio dolore.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>

            </div>

            <div className={styles.b}>
                <div className={styles.donutImage}>
                    {
                        donuts.length >= 1
                        &&
                        <Image
                            src={donuts[index].image}
                            alt={donuts[index].name}
                            draggable={false}
                            fill
                        />}
                </div>

                <div className={styles.bottom}>
                    {
                        donuts.map((v, i) =>
                            <div
                                key={i}
                                className={styles.smallSquare}
                                onClick={() => setIndex(i)}
                                style={index === i && { boxShadow: 'var(--light-cyan-shadow-medium)', transform: 'translateY(-5px)' } || {}}
                            >
                                <Image
                                    src={v.image}
                                    alt={v.name}
                                    draggable={false}
                                    fill
                                />
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    );
}

export default Hero;