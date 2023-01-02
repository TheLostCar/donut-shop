import { CSSProperties } from 'react';
import styles from './InfiniteSlider.module.scss'

type Props = {
    children: JSX.Element[];
    size: number;
    containerStyle?: CSSProperties
}

const InfiniteSlider = ({ children, size, containerStyle }: Props) => {
    const elements = children.map((child, i) => {
        return <div
            key={i}
            style={{
                height: size,
                width: size
            }}
        >
            {child}
        </div>
    })

    return (
        <div
            className={styles.container}
            style={{ minHeight: size, ...containerStyle }}
        >
            <div className={styles.first}>
                {elements}
            </div>

            <div className={styles.second}>
                {elements}
            </div>
        </div>
    );
}

export default InfiniteSlider;