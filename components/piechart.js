import React from 'react';
import { Pie } from 'react-chartjs-2';
import { useState, useEffect } from 'react'



const Piechart = () => {
  const [plays,setPlay] = useState({})
 

  useEffect(async () => {
    const res3 = await fetch('/api/getCount')
    const count = await res3.json()
    setPlay(count)
    
  }, [])
  var data = {}
if(typeof plays.data != "undefined") {
   data = {
    labels: Object.keys(plays.data),
    datasets: [
      {
        label: '# of Votes',
        data: Object.values(plays.data),
        backgroundColor: [
          'rgba(255, 200, 209, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
}




return (
  <>
    <Pie data={data} height={50} width={50}/>
  </>
);

}


export default Piechart;