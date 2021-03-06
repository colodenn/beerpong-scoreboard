import { query as q } from 'faunadb';
import { faunaClient } from '../../lib/fauna';

process.env.TZ = 'Europe/Amsterdam';

export default async function addPlayer(req, res) {
    if (req.method == 'POST') {
        let query = await faunaClient.query(
            q.Create(
             q.Collection('solos'),
             {
                 
                 data: { 
                    player1: req.body.player1,
                    player2: req.body.player2,
                    art: req.body.art,
                    count: req.body.count,
                    schnickelgewinner: req.body.schnickelgewinner,
                    leftcount: req.body.leftcount,
                    timestamp: (new Date(req.body.timestamp).toString().slice(0,-40)),
                    winner: req.body.winner
                 }
             }
            )
          );
             console.log(query)
        res.status(200).json({ data: query });
      }
  }