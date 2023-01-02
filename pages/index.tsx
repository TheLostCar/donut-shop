import ClassicDonuts from '@components/ClassicDonuts';
import CommunityCreations from '@components/CommunityCreations';
import DeliciousToEatAndSee from '@components/DelightToAllSenses';
import Footer from '@components/Footer';
import Hero from '../components/Hero';
import styles from '../styles/Index.module.css';


export default function Home() {
  return (
    <>
      <Hero />
      <DeliciousToEatAndSee />
      <CommunityCreations />
      <ClassicDonuts />
      <Footer />
    </>
  )
}
