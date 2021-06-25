
import prisma from '../../lib/prisma';

export default async function solos(req, res) {
    if (req.method == 'GET') {
      console.log(prisma.solo)
      // let query = await faunaClient.query(
      //   q.Map(
      //     q.Paginate(q.Documents(q.Collection('solos'))),
      //     q.Lambda((solos) => q.Get(solos))
      //   )
      // );
      // var arr = []
      // query.data.forEach(e => {
      //   arr.push(e.data)
      // });
      res.status(200).json({ data: "arr" });
    }
    


  }
  