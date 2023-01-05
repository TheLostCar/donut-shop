export type CommunityCreationsRecord = {
    id: string;
    image: string;
    author?: string;
    source?: string;

    created: string;
    updated: string;
}

export type DonutRecord = {
    id: string;
    name: string;
    price: string;
    description: string;
    image: string;
}