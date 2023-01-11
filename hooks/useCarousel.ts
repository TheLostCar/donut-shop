import { useEffect, useState } from "react";

const useCarousel = (length: number) => {
    const [index, setIndex] = useState(0);

    function nextIndex() {
        setIndex(i => {
            if (i + 1 > length - 1) return 0;
            return i + 1;
        })
    }

    return [index, setIndex, nextIndex] as const;
}

export default useCarousel;