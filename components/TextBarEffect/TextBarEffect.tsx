import React from 'react';
import styles from './TextBarEffect.module.scss';

type Props = {
    text: string;
    textColor?: string;
    barColor: string;
    hoverColor: string;
}

const TextBarEffect = ({ text, textColor = 'inherit', barColor, hoverColor }: Props) => {
    return (
        <span
            className={styles.container}
            style={{ "--textColor": textColor, "--barColor": barColor, "--hoverColor": hoverColor } as React.CSSProperties}
        >
            {text}
        </span>
    );
}

export default TextBarEffect;