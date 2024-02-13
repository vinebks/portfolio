import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const response = personalInfosContent();

    res.status(200).json(response);
}
interface IPersonalInfosContent {
    title: string,
    description: string
    image: string,
    side: "right" | "left",
}

function personalInfosContent(): IPersonalInfosContent[]{

    return [
        {
            title: "XXXXXX",
            description: 'xxxxxxx',
            image: 'none image',
            side: 'left'
        },
        {
            title: "YYYYYYY",
            description: 'yyyyyyyyy',
            image: 'none image',
            side: 'right'
        }
    ]
}