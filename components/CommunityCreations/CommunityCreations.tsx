import styles from './CommunityCreations.module.scss';
import InfiniteSlider from './InfiniteSlider';


const CommunityCreations = () => {
    return (
        <div className={styles.container}>
            <h2>Community Creations</h2>
            <InfiniteSlider size={200}>
                <div>a</div>
                <div>b</div>
                <div>c</div>
                <div>d</div>
                <div>e</div>
                <div>f</div>
                <div>g</div>

            </InfiniteSlider>
        </div>
    );
}

export default CommunityCreations;