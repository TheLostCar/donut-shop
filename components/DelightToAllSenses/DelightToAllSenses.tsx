import Image from 'next/image';
import styles from './DelightToAllSenses.module.scss';

const DelightToAllSenses = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h2>A treat to all 5 senses</h2>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error similique eveniet dignissimos molestias, consequatur non pariatur quisquam at enim dolorum aut rem natus, in maiores quasi provident ea. Eligendi, reiciendis?
                </p>
            </div>

            <div className={styles.image}>
                <Image
                    src='https://res.cloudinary.com/dgnrqyibk/image/upload/donut-shop/donut_assets/donutThreeStack_udttne.png'
                    alt={''}
                    fill
                />
            </div>
        </div>
    );
}

export default DelightToAllSenses;