import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './CommunityCreations.module.scss';
import InfiniteSlider from './InfiniteSlider';
import { CommunityCreationsRecord } from '@customTypes/pocketbase.types';
import useCommunityCreations from '@hooks/useCommunityCreations';

const CommunityCreations = () => {
    const [creations] = useCommunityCreations();
    const SIZE = 200

    return (
        <div className={styles.container}>
            <h2>Community Creations</h2>
            <InfiniteSlider size={SIZE}>
                {
                    creations.map((v) =>
                        <div key={v.id} className={styles.imageWrapper}>
                            <Image
                                src={v.image}
                                alt={`Image of donut submitted by ${v.author || 'an anonymous community member'}`}
                                height={SIZE}
                                width={SIZE}
                            />
                        </div>
                    )
                }

            </InfiniteSlider>
        </div>
    );
}

export default CommunityCreations;