// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { query as q } from 'faunadb';
import { faunaClient } from '../../lib/fauna';

export default async function getPlayCount(req, res) {
    if (req.method == 'GET') {
      let query = await faunaClient.query(
        q.Map(
          q.Paginate(q.Documents(q.Collection('solos'))),
          q.Lambda((solos) => q.Get(solos))
        )
      );
      var arr = {}
      query.data.forEach(e => {

            if(typeof arr[e.data.player1] == "undefined" ) {
                arr[e.data.player1] = 1
            } else if (typeof arr[e.data.player2] == "undefined"){
                
                arr[e.data.player2] = 1
            } else {
                
                arr[e.data.player1] = arr[e.data.player1] + 1
                arr[e.data.player2] = arr[e.data.player2] + 1
            }

        
      });
      res.status(200).json({ data: arr });
    }
    
  }
  