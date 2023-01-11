import { DependencyList, useEffect } from "react";

const useInterval = (cb: () => void, msTimeout: number, deps: DependencyList) => {
    useEffect(() => {
        let timeout = setTimeout(() => cb(), msTimeout * 2)

        return () => clearTimeout(timeout)
    })

    useEffect(() => {
        console.log('changed:', deps[0])
        let timeout: NodeJS.Timer;
        timeout = setTimeout(() => cb(), msTimeout)

        return () => {
            clearTimeout(timeout)
        };
    }, deps)


}

export default useInterval;