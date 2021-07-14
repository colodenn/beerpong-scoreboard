
import prisma from '../../lib/prisma';

export default async function solos(req, res) {
    if (req.method == 'GET') {
      let query = await prisma.solo.findMany()
      res.status(200).json({ data: query });
    }
  }
  