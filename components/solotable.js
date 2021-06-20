import { useState, useEffect } from 'react'
import { useTable } from 'react-table'
import useSWR from 'swr'
import Table from './table'
const SoloTable = () => {

    useEffect(async () => {
        const res = await fetch('/api/solos')
        const solos = await res.json()
        console.log(solos.data)
        setData(solos.data)
    }, [])

    
    
    const [data,setData] = useState([]
      )
    

      const [columns, setColumns] = useState(
        () => [
          {
            Header: 'Datum',
            accessor: 'col1', // accessor is the "key" in the data
          },
          {
            Header: 'Spieltyp',
            columns: [
                {
                    Header: 'Art',
                    accessor: 'col2', // accessor is the "key" in the data
                  },
                  {
                    Header: 'Becher count',
                    accessor: 'col3', // accessor is the "key" in the data
                  },
            ]
          },
          {
              Header: 'Spieler 1',
              accessor: 'col4'
          },
          {
            Header: 'Spieler 2',
            accessor: 'col5'
        },
         {
            Header: 'Ergebnis',
            columns: [
                {
                    Header: 'Schnickelgewinner',
                    accessor: 'col6'
                },
                {
                    Header: 'Übrige Becher',
                    accessor: 'col7'
                },
                {
                    Header: 'Gewinner',
                    accessor: 'col8'
                },
            ]
        },
        ],
        []
      )

  
  return (
    <Table columns={columns} data={data}/>
  )
}

export default SoloTable;