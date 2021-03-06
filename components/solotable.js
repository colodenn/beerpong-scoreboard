import { useState, useEffect } from 'react'
import { useTable } from 'react-table'
import useSWR from 'swr'
import Tables from './table'
import Modal from 'react-modal';
import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const SoloTable = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [players,setPlayers] = useState([])
  const [startDate, setStartDate] = useState(new Date());
  
    useEffect(async () => {
        const res = await fetch('/api/solos')
        const solos = await res.json()
        setData(solos.data.slice(-8).reverse())
        const res2 = await fetch('/api/players')
        const players = await res2.json()
        setPlayers(players.data)
        
    }, [])

    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    };
    
    const [data,setData] = useState([]
      )
    

      const [columns, setColumns] = useState(
        () => [
          {
            Header: 'Datum',
            accessor: 'timestamp', // accessor is the "key" in the data
          },
          
           
                {
                    Header: 'Art',
                    accessor: 'art', // accessor is the "key" in the data
                  },
                  {
                    Header: 'Becher count',
                    accessor: 'count', // accessor is the "key" in the data
                  },
            
          
          {
              Header: 'Spieler 1',
              accessor: 'player1'
          },
          {
            Header: 'Spieler 2',
            accessor: 'player2'
        },
        
                {
                    Header: 'Schnickelgewinner',
                    accessor: 'schnickelgewinner'
                },
                {
                    Header: '??brige Becher',
                    accessor: 'leftcount'
                },
                {
                    Header: 'Gewinner',
                    accessor: 'winner'
                },
            
        
        ],
        []
      )

  
      function openModal() {
        setIsOpen(true);
      }
    
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
      }
    
      function closeModal() {
        setIsOpen(false);
      }

      const registerUser = async event => {
        event.preventDefault()
        fetch('/api/addSolo', {method: 'POST', headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
         player1: event.target.player1.value,
         player2: event.target.player2.value,
         art:event.target.art.value,
         count: event.target.count.value,
         schnickelgewinner: event.target.schnickelgewinner.value,
         leftcount: event.target.leftcount.value,
         winner: event.target.winner.value,
         timestamp: startDate

        })
        })
        .then((res) => res.json()).then(re => {
          closeModal();
          setData(data.concat(re.data.data));
        })
      }
    
  return (
    <>
    <Tables columns={columns} data={data}/>
    <div className="flex mt-4">
    <button onClick={openModal} className=" justify-center mx-auto bg-black text-white font-normal hover:bg-gray-700 px-4 py-2">Add Solo</button>

    </div>

    <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}

        contentLabel="Example Modal"
      >

<div className="mt-10 sm:mt-0">
  <div className="md:grid md:grid-cols-1 md:gap-6">
  
            <form onSubmit={registerUser}>
    <div className="mt-5 md:mt-0 md:col-span-2">
        <div className="overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
                <label for="country" className="block text-sm font-medium text-gray-700">Player 1</label>
                <select id="player1" name="player1" autocomplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                { players.map(el => ( 
                <option>{el.name}</option>
             ))
            }
                </select>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label for="country" className="block text-sm font-medium text-gray-700">Player 2</label>
                <select id="player2" name="player2" autocomplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
             { players.map(el => ( 
                <option>{el.name}</option>
             ))
            }
                </select>
              </div>

   

              <div className="col-span-6 sm:col-span-3">
                <label for="country" className="block text-sm font-medium text-gray-700">Art</label>
                <select id="art" name="art" autocomplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option>Turnier</option>
                  <option>Solo</option>
                </select>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label for="country" className="block text-sm font-medium text-gray-700">Becher count</label>
                <select id="count" name="count" autocomplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option>6</option>
                  <option>10</option>
                  <option>15</option>

                </select>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label for="country" className="block text-sm font-medium text-gray-700">Schnickelgewinner</label>
                <select id="schnickelgewinner" name="schnickelgewinner" autocomplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                { players.map(el => ( 
                <option>{el.name}</option>
             ))
            }
                </select>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label for="country" className="block text-sm font-medium text-gray-700">Gewinner</label>
                <select id="winner" name="winner" autocomplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option>Player 1</option>
                  <option>Player 2</option>
                  <option>Unentschieden</option>
                </select>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label for="country" className="block text-sm font-medium text-gray-700">??brige Becher</label>
                <select id="leftcount" name="leftcount" autocomplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option>0</option>
              
                <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>



                </select>
              </div>
              <div className="col-span-6 sm:col-span-3">
              <label for="date" className="block text-sm font-medium text-gray-700">Datum</label>

              <DatePicker className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      timeInputLabel="Time:"
      dateFormat="MM/dd/yyyy h:mm aa"
      showTimeInput
      id="date" name="date"
    />
    </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" className="inline-flex justify-center py-2 px-4 text-sm font-medium  text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Add
            </button>
          </div>
        </div>
    </div>
</form>
  </div>
</div>
      </Modal>
</>
  )
}

export default SoloTable;