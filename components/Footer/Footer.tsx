import Image from 'next/image';
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.callToAction}>

                <div className={styles.banner}>

                    <div className={styles.bannerImageWrapper}></div>

                    <div className={styles.bannerText}>
                        <h2>Save money and Earn rewards by downloading our free app</h2>
                    </div>

                </div>

            </div>

            <div className={styles.nav}>

                <div className={styles.logo}>
                    <Image
                        src={'/donutLogo.svg'}
                        fill
                        alt='Donut Shop Logo'
                    />
                </div>

                <div className={styles.links}>

                    <ul>
                        <li><a href="#">Locations</a></li>
                        <li><a href="#">Mobile App</a></li>
                        <li><a href="#">Community</a></li>
                    </ul>

                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Help Center</a></li>
                    </ul>

                    <ul>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Pintrest</a></li>
                    </ul>

                </div>

            </div>

            <div className={styles.bottomLinks}>
                <ul>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms Of Service</a></li>
                    <li><a href="#">Cookies</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;