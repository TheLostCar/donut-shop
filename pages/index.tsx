import ClassicDonuts from '@components/ClassicDonuts';
import CommunityCreations from '@components/CommunityCreations';
import DeliciousToEatAndSee from '@components/DelightToAllSenses';
import Footer from '@components/Footer';
import NavBar from '@components/NavBar';
import Hero from '../components/Hero';
import styles from '../styles/Index.module.css';


export default function Home() {
    return (
        <>
            <NavBar />
            <Hero />
            <DeliciousToEatAndSee />
            <CommunityCreations />
            <ClassicDonuts />
            <Footer />
        </>
    )
}
