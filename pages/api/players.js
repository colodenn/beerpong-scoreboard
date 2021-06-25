import prisma from '../../lib/prisma';

export default async function solos(req, res) {
    if (req.method == 'GET') {
        const feed = await prisma.user.findMany({
          select: {
            name: true
          }
        })

        res.status(200).json({ data: feed });
      }
  }