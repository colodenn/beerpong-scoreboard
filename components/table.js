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
    <Table  style={{"backgroundColor": "#FFA3B3"}} className="border-black border text-left  " >
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
            {console.log(e)}
            return (
            <Tr  className="border border-black">
             
        
  {
    arr.map(t => {
        return (
          <Td className="border border-black p-4 sm:p-2" style={{"backgroundColor":"#FFC8D1"}}>
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
    
     </>
  )
}

export default Tables;