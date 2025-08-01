import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Replace with external API logic
  // const { endpoint, ...rest } = req.body;
  // const apiRes = await fetch(endpoint, {...});

  res.status(200).json({ message: "Proxy endpoint is working!" });
}
