import { useState, useEffect } from 'react'
import { useTable } from 'react-table'


const SoloTable = () => {
    
    useEffect(async () => {
        const res = await fetch('/api/solos')
        const solos = await res.json()
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

      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns, data })
  return (
    <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
                 style={{
                   borderBottom: 'solid 3px red',
                   background: 'aliceblue',
                   color: 'black',
                   fontWeight: 'bold',
                 }}
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                     style={{
                       padding: '10px',
                       border: 'solid 1px gray',
                       background: 'papayawhip',
                     }}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
  )
}

export default SoloTable;