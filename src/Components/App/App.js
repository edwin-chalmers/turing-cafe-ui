import './App.css';
import React from 'react';
import { fetchData } from '../../apiCalls';
import { useState, useEffect } from 'react';

import Form from '../Form/Form'
import Reservations from '../Reservations/Reservations'

function App() {
  const [reservations, setReservations] = useState([])

  function addRes(newRes) {
    setReservations([...reservations, newRes])
  }

  useEffect(() => {
    fetchData('') 
      .then(data => setReservations(data))
      .catch(error => console.log(error))
  }, [])

  console.log('reservations',reservations)

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <Form addRes={addRes}/>
      <Reservations reservations={reservations} />
    </div>
  );
}

export default App; 