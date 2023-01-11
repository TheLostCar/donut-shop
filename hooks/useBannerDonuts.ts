import { useEffect, useState } from "react";
import { BannerRecord } from "@customTypes/pocketbase.types";

const useBannerDonuts = () => {
    const [donuts, setDonuts] = useState<BannerRecord[]>([])

    useEffect(() => {
        fetch('/api/getBannerDonuts', {
            method: 'GET',
            headers: new Headers({ 'content-type': 'application/json' }),
        })
            .then(r => r.json())
            .then(r => setDonuts(r.data))
    }, [])

    return [donuts]
}

export default useBannerDonuts;