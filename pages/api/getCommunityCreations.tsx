import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';
import { CommunityCreationsRecord } from '@customTypes/pocketbase.types';

type Data = {
    data: any;
    message: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET': {
            const pb = new PocketBase(process.env.POCKETBASE_URL);
            const result = (await pb.collection('community_creations').getList<CommunityCreationsRecord>(1, 8, {})).items;
            return res.status(200).json({ data: result, message: 'oh' });
        }
        default:
            res.status(400).json({ message: 'Method not supported', data: '' });
    }
}
