import { query as q } from 'faunadb';
import { faunaClient } from '../../lib/fauna';


export default async function addPlayer(req, res) {
    if (req.method == 'POST') {
        let query = await faunaClient.query(
            q.Create(
             q.Collection('player'),
             {
                 data: {
                     name: req.body
                 }
             }
            )
          );

        res.status(200).json({ data: query });
      }
  }