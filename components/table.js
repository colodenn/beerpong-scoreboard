import {Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table'

import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
const Tables = (props) => {

    const columns = props.columns
    const data = props.data
  console.log(data)
    
  return (
    <>
    <Table  className="border-black border text-left  " >
       <Thead className="">
  
           <Tr  className="bg-black text-white py-4">
          {
            columns.map((e) => {
              return (
               <Th className="p-4">
                 {e.Header}
               </Th>
              )
            })
          } 
             
           </Tr>
  
       </Thead>
       <Tbody className="border border-black h-80 overflow-y-scroll ">
      
          {data.map((e) => { 
            return (
            <Tr  className="border border-black">
              {Object.values(e).map(e => {
                return (
            <Td className="border border-black p-4" style={{"backgroundColor":"#FFC8D1"}}>
              {e}
            </Td>
                )
              })
            }

 
      </Tr>
            )
          })}
             
          
  
       </Tbody>
     </Table>
    
     </>
  )
}

export default Tables;