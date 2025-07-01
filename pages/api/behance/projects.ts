import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "node:fs";

export type Project = {
    id: string;
    title: string;
    name: string;
    link: string;
    thumbnail: string;
};
export type ProjectDetails = {
    title: string;
    name: string;
    link: string;
    thumbnail: string;
};
const scrapeProjects = async (): Promise<Project[]> => {
    try {
        const graphqlQuery = fs
            .readFileSync('graphql/behanceList.graphql', 'utf8')
            .replaceAll('\n', '  ');
        const response: Project[] = [];
        const variables = { username: 'mood_design' };
        while (true) {
            const { data } = (await fetch('https://www.behance.net/v3/graphql', {
                headers: {
                    accept: '*/*',
                    'accept-language': 'en-US,en;q=0.9',
                    'content-type': 'application/json',
                    priority: 'u=1, i',
                    'sec-ch-ua':
                        '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"macOS"',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-origin',
                    'x-bcp': '4a9bb57e-2d2e-4596-b748-ce965b3341c7',
                    'x-newrelic-id': 'VgUFVldbGwsFU1BRDwUBVw==',
                    'x-requested-with': 'XMLHttpRequest',
                    cookie:
                        'gk_suid=18927724; gki=feature_pro_boost_record_impressions:false,; originalReferrer=; ilo0=true; bcp=4a9bb57e-2d2e-4596-b748-ce965b3341c7; OptanonAlertBoxClosed=2025-01-13T20:08:26.629Z; OptanonConsent=groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A1; bcp_generated=1736798906241; _cs_mk_aa=0.3527290051385641_1736798906873; kndctr_9E1005A551ED61CA0A490D45_AdobeOrg_cluster=irl1; kndctr_9E1005A551ED61CA0A490D45_AdobeOrg_identity=CiY1MjUzNjE3ODczODkyMTY2Njc3MjQxMjI1OTQ5MjI5NDI4MTA4M1ITCJ3WoIrGMhABGAEqBElSTDEwAPABndagisYy; AMCV_9E1005A551ED61CA0A490D45%40AdobeOrg=MCMID|52536178738921666772412259492294281083; gpv=behance.net:profile:default',
                    Referer: 'https://www.behance.net/mood_design',
                    'Referrer-Policy': 'strict-origin-when-cross-origin',
                },
                body: `{"query":"${graphqlQuery}","variables":${JSON.stringify(variables)}}`,
                method: 'POST',
            })
                .then((e) => e.text())
                .then((e) => JSON.parse(e))) as { data: Project[] };

             // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            variables.after = data.user.profileProjects.pageInfo.endCursor;

             // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            response.push(...data.user.profileProjects.nodes);

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            if (!data.user.profileProjects.pageInfo.hasNextPage) {
                break;
            }
        }
        return response;
    } catch (error:unknown) {
        console.error('Error scraping projects:', error);
    }
    return []
};
export default async function handler(
    _req: NextApiRequest,
    res: NextApiResponse
) {
    return res.status(200).json(await scrapeProjects())
}
