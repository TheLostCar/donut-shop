import { useEffect, useState } from "react";
import { DonutRecord } from "@customTypes/pocketbase.types";

const useClassicDonuts = () => {
    const [donuts, setDonuts] = useState<DonutRecord[]>([])

    useEffect(() => {
        fetch('/api/getClassicDonuts', {
            method: 'GET',
            headers: new Headers({ 'content-type': 'application/json' }),
        })
            .then(r => r.json())
            .then(r => setDonuts(r.data))
    }, [])

    return [donuts]
}

export default useClassicDonuts;