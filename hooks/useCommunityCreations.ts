import { CommunityCreationsRecord } from "@customTypes/pocketbase.types";
import { useEffect, useState } from "react";

const useCommunityCreations = () => {
    const [creations, setCreations] = useState<CommunityCreationsRecord[]>([])

    useEffect(() => {
        fetch('/api/getCommunityCreations', {
            method: 'GET',
            headers: new Headers({ 'content-type': 'application/json' }),
        })
            .then(r => r.json())
            .then(r => setCreations(r.data))
    }, [])

    return [creations]
}

export default useCommunityCreations;