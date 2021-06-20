// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { query as q } from 'faunadb';
import { faunaClient } from '../../lib/fauna';

export default async function solos(req, res) {
    if (req.method == 'GET') {
      let query = await faunaClient.query(
        q.Map(
          q.Paginate(q.Documents(q.Collection('solos'))),
          q.Lambda((solos) => q.Get(solos))
        )
      );
      var arr = []
      query.data.forEach(e => {
        arr.push(e.data)
      });
      console.log(arr)
      res.status(200).json({ data: arr });
    }
    
  }
  