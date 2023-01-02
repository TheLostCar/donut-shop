import styles from './Hero.module.scss';

const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.a}>
                <h1>Donut Time</h1>

                <div className={styles.leftSideContent}>
                    <h2>Header</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsam eum rerum illum eos, quasi commodi tenetur itaque ex facilis, labore odit in, dolor molestiae vitae totam atque optio dolore.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, similique, atque repellendus quo neque ut velit mollitia qui quos deleniti doloribus beatae, inventore expedita aspernatur odit quod est accusamus fugit!
                    </p>
                </div>

            </div>

            <div className={styles.b}>
                <div className={styles.donutImage}>

                </div>

                <div className={styles.bottom}>
                    <div className={styles.smallSquare}></div>
                    <div className={styles.smallSquare}></div>
                    <div className={styles.smallSquare}></div>
                    <div className={styles.smallSquare}></div>
                </div>
            </div>

        </div>
    );
}

export default Hero;