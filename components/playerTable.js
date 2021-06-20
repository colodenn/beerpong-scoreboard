import { useState, useEffect } from 'react'
import Modal from 'react-modal';
import React from 'react';


import Table from './table'
const PlayerTable = () => {
    const [data,setData] = useState([])

    useEffect(async () => {
        const res = await fetch('/api/players')
        const players = await res.json()
        setData(players.data)
    }, []) 

    const [columns, setColumns] = useState(
      () => [
        {
          Header: 'Name',
          accessor: 'name', // accessor is the "key" in the data
        }
      ],
      []
    )
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

    const [inputV, setInputV] = useState('')

    const [modalIsOpen, setIsOpen] = useState(false);
    
    function handleChange(e) {
      setInputV(e.target.value)
    }

    function handleClick() {
      fetch('/api/addPlayer', {method: 'POST', headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputV)})
      .then((res) => res.json()).then(re => {
        closeModal();
        setData(data.concat(re.data.data));
      })
      
    }

    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  

     
  return (
    <div id="main">
    <Table columns={columns} data={data} />
    <button className="rounded bg-blue-400 text-white font-bold px-4 py-2" onClick={openModal}>Add Player</button>

    <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}

        contentLabel="Example Modal"
      >
       <input onChange={ handleChange } className="mr-2 rounded border-2 border-black" />
        <button onClick={() => handleClick()}>Add Player</button>
      </Modal>

   </div>
  )
}

export default PlayerTable;