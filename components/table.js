import {Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table'

import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

const Tables = (props) => {

    const columns = props.columns
    const data = props.data
    var arr = []
    columns.forEach(element => {
        arr.push(Object.values(element)[1])
    });
    
  return (
    <>
    <Table  style={{"backgroundColor": "#FFA3B3"}} className="border-black border text-left   " >
       <Thead className="">
  
           <Tr  className="bg-black text-white py-4">
          {
            columns.map((e) => {
              return (
               <Th className="py-2">
                 {e.Header}
               </Th>
              )
            })
          } 
             
           </Tr>
  
       </Thead>
       <Tbody className="border border-black h-80 overflow-y-scroll ">
          {data.map((e) => { 
            {console.log(e)}
            return (
            <Tr  className="border border-black " style={{"backgroundColor": "#FFC8D1"}}>
             
        
  {
    arr.map(t => {
        return (
          <Td className="border border-black sm:py-2 py-0 " style={{"backgroundColor":"#FFC8D1"}}>
              {e[t]}
            </Td>
        )
    })
  }

            
            

 
      </Tr>
            )
          })}
             
          
  
       </Tbody>
     </Table>
    
     {/* <Table>
  <Thead>
    <Tr>
      <Th>Event</Th>
      <Th>Date</Th>
      <Th>Location</Th>
      <Th>Organizer</Th>
      <Th>Theme</Th>
      <Th>Agent</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Td>Tablescon</Td>
      <Td>9 April 2019</Td>
      <Td>East Annex</Td>
      <Td>Super Friends</Td>
      <Td>Data Tables</Td>
      <Td>Coston Perkins</Td>
    </Tr>
    <Tr>
      <Td>Capstone Data</Td>
      <Td>19 May 2019</Td>
      <Td>205 Gorgas</Td>
      <Td>Data Underground</Td>
      <Td>Data Scence</Td>
      <Td>Jason Phillips</Td>
    </Tr>
    <Tr>
      <Td>Tuscaloosa D3</Td>
      <Td>29 June 2019</Td>
      <Td>Github</Td>
      <Td>The Contributors Consortium</Td>
      <Td>Data Viz</Td>
      <Td>Coston Perkins</Td>
    </Tr>
  </Tbody>
</Table> */}
     </>
  )
}

export default Tables;