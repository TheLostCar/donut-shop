import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';
import { BannerRecord } from '@customTypes/pocketbase.types';

type Data = {
    data: BannerRecord[];
    message?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET': {
            const pb = new PocketBase(process.env.POCKETBASE_URL);
            const result = (await pb.collection('banner_donuts').getList<BannerRecord>(1, 4, {})).items;

            return res.status(200).json({ data: result });
        }
        default:
            res.status(400).json({ message: 'Method not supported', data: [] });
    }
}
