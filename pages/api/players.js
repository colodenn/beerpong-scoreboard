import { query as q } from 'faunadb';
import { faunaClient } from '../../lib/fauna';


export default async function solos(req, res) {
    if (req.method == 'GET') {
        let query = await faunaClient.query(
          q.Map(
            q.Paginate(q.Documents(q.Collection('player'))),
            q.Lambda((player) => q.Get(player))
          )
        );
        var arr = []
        query.data.forEach(e => {
          arr.push(e.data)
        });
        res.status(200).json({ data: arr });
      }
  }