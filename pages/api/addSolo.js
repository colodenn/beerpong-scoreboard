import { query as q } from 'faunadb';
import { faunaClient } from '../../lib/fauna';
import prisma from '../../lib/prisma';

process.env.TZ = 'Europe/Amsterdam';

export default async function addPlayer(req, res) {
    if (req.method == 'POST') {
        let query = await prisma.solo.create(
            {
                data: { 
                    Player1: req.body.player1,
                    Player2: req.body.player2,
                    typeName: req.body.art,
                    count: parseInt(req.body.count),
                    Schnickelgewinner: req.body.schnickelgewinner,
                    leftover: parseInt(req.body.leftcount),
                    date: (new Date(req.body.timestamp)),
                    Winner: req.body.winner
                 }
            }
            
        )
         
        res.status(200).json({ data: query });
      }
  }