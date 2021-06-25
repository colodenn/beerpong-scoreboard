import prisma from "../../lib/prisma";


export default async function addPlayer(req, res) {
    if (req.method == 'POST') {
        let query = await prisma.user.create({
            data: {
                name: req.body
            },
            select: {
                name: true
            }
        })
        res.status(200).json({ data: {data: query} });
      }
  }